import React, { useState, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";
import AdminActionBoxB from "./AdminActionBoxB";
import axios from "axios";
import { baseURL } from "./backendConection";

function Planilla({ tramite }) {
    const [sucursal, setSucursal] = useState("GymASETEC");
    const [listaSucursales, setSucursales] = useState([]);
    const [infoBD, setInfoBD] = useState([]);

    useEffect(() => {
        axios
            .get(baseURL + `Payroll/GetPayrollNames`)
            .then(function (response) {
                setInfoBD(response.data);
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
    });
    const generarInforme = () => {
        // Genera un pdf con el informe de la planilla
        var doc = new jsPDF();
        doc.text(10, 10, "Hello world!");
        doc.save("hello-world.pdf");
    };
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
                <Button onClick={generarInforme}>Generar Informe</Button>
            </div>
            <AdminActionBoxB objetosBD={infoBD} tramite={"Planilla"} />
        </div>
    );
}

export default Planilla;
