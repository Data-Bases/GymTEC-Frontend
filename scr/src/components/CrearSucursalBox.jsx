import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./backendConection";
import { Button } from "react-bootstrap";

function CrearSucursalBox({ objetosBD, sucursal }) {
    const [nombre, guardarNombre] = useState("");

    const guardarSucursal = () => {
        objetosBD.name = nombre
        axios
            .post(
                baseURL + `Branch/CreateBranch`,
                objetosBD
            )
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    // POST response with a status code not in range 2xx
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
        guardarNombre("");
    };
    return (
        <div>
            <input
                onChange={(event) => {
                    guardarNombre(event.target.value);
                }}
                type="text"
                placeholder="Nombre"
            />
            <Button onClick={guardarSucursal}>Clonar Sucursal</Button>
        </div>
    );
}

export default CrearSucursalBox;
