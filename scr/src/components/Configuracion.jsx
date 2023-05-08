import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import AdminConfigBox from "./AdminConfigBox";
import { useState, useEffect } from "react";
import { listaConfigs } from "./backendConection";
import { Link } from "wouter";
import axios from "axios";
import { baseURL } from "./backendConection";
import "../styles/custom.scss";

function Configuracion({ tramite }) {
    const [sucursal, setSucursal] = useState("GymASETEC");
    const [listaSucursales, setSucursales] = useState([]);
    tramite = decodeURI(tramite);
    // console.log(tramite);

    useEffect(() => {
        axios
            .get(baseURL + "Branch/GetBranchesNames")
            .then(function (response) {
                setSucursales(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    // GET response with a status code not in range 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // no response
                    console.log(error.request);
                    // instance of XMLHttpRequest in the browser
                    // instance ofhttp.ClientRequest in node.js
                } else {
                    // Something wrong in setting up the request
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }, []);

    return (
        <div className="d-flex h-100 w-100 gestion">
            <div className="d-flex h-100 flex-column">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {sucursal}
                </Dropdown.Toggle>

                <Dropdown.Menu
                    onClick={(event) => setSucursal(event.target.innerText)}
                >
                    {listaSucursales.map((nombre) => (
                        <Dropdown.Item key={nombre}>{nombre}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {tramite}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {listaConfigs.map((nombre) => (
                        <Link key={nombre} href={`/configuracion/${nombre}`}>
                            <Dropdown.Item key={nombre}>{nombre}</Dropdown.Item>
                        </Link>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            {tramite == "Clases" ? <></> : <AdminConfigBox tramite={tramite} sucursal={sucursal} />}
        </div>
    );
}

export default Configuracion;
