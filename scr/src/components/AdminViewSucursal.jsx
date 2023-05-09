import React, { useState, useEffect } from "react";
import ObjectList from "./ObjectList";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { baseURL } from "./backendConection";

function AdminViewSucursal({ objetosBD, sucursal }) {
    const [selectedObject, setSelectedObject] = useState(objetosBD);
    const [editMode, setEditMode] = useState(false);
    const [admin, setAdmin] = useState("");

    useEffect(() => {
        setSelectedObject(objetosBD)
        axios
            .get(baseURL + `Employee/GetEmployeeById/${selectedObject.idEmployeeAdmin}`)
            .then(function (response) {
                setAdmin(response.data.name + " " + response.data.lastName1 + " " + response.data.lastName2);
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
    }, [objetosBD, sucursal]);
    // const handleSelectedObject = (objeto) => {
    //     setSelectedObject(objeto);
    //     setEditedID(objeto.identificador);
    //     setEditedDireccion(objeto.direccion);
    //     setEditedPuesto(objeto.puesto);
    //     setEditedSucursal(objeto.sucursal);
    //     setEditedTipoPlanilla(objeto.tipoPlanilla);
    //     setEditedSalario(objeto.salario);
    //     setEditedEmail(objeto.email);

    //     setEditMode(false);
    // };

    // const handleEditClick = () => {
    //     setEditMode(true);
    // };

    // const handleSaveClick = () => {
    //     // ---------- SET ---------- (informacion)
    //     selectedObject.identificador = editedID; // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
    //     selectedObject.direccion = editedDireccion;
    //     selectedObject.puesto = editedPuesto;
    //     selectedObject.sucursal = editedSucursal;
    //     selectedObject.tipoPlanilla = editedTipoPlanilla;
    //     selectedObject.salario = editedSalario;
    //     selectedObject.email = editedEmail;

    //     setEditMode(false);
    // };

    return (
        <Container className="d-flex infoGestion">
            <div
                className="d-flex"
                style={{ flexDirection: "column", width: "400px" }}
            >
                <h2>Información:</h2>
                {selectedObject && (
                    <>
                        {editMode ? (
                            <div
                                className="d-flex"
                                style={{
                                    justifyContent: "start",
                                    flexDirection: "column",
                                }}
                            >
                                <Form.Control
                                    placeholder="ID"
                                    value={editedID}
                                    onChange={(e) =>
                                        setEditedID(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Direccion"
                                    value={editedDireccion}
                                    onChange={(e) =>
                                        setEditedDireccion(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Puesto"
                                    value={editedPuesto}
                                    onChange={(e) =>
                                        setEditedPuesto(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Sucursal"
                                    value={editedSucursal}
                                    onChange={(e) =>
                                        setEditedSucursal(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Tipo de Planilla"
                                    value={editedTipoPlanilla}
                                    onChange={(e) =>
                                        setEditedTipoPlanilla(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Salario"
                                    value={editedSalario}
                                    onChange={(e) =>
                                        setEditedSalario(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Email"
                                    value={editedEmail}
                                    onChange={(e) =>
                                        setEditedEmail(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={handleSaveClick}
                                    style={{
                                        width: "100%",
                                        background: "#1382C9",
                                    }}
                                >
                                    {" "}
                                    ✓{" "}
                                </Button>
                            </div>
                        ) : (
                            <div
                                className="d-flex"
                                style={{
                                    justifyContent: "start",
                                    flexDirection: "column",
                                }}
                            >
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Nombre: {selectedObject.name}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Direccion:{" "}
                                    {`${selectedObject.province}, ${selectedObject.canton}, ${selectedObject.district}, ${selectedObject.directions}`}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Capacidad Máxima:{" "}
                                    {selectedObject.maxCapacity}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Tienda Abierta:{" "}
                                    {selectedObject.openStore ? "Sí" : "No"}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Spa Abierto:{" "}
                                    {selectedObject.openSpa ? "Sí" : "No"}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Administrador: {admin}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Horario: {selectedObject.schedule}
                                </p>
                                {/* <Button
                                    onClick={handleEditClick}
                                    style={{
                                        width: "100%",
                                        background: "#1382C9",
                                    }}
                                >
                                    {" "}
                                    ✎{" "}
                                </Button> */}
                            </div>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminViewSucursal;
