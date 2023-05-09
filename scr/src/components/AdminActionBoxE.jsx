import React, { useState } from "react";
import ObjectList from "./ObjectList";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { listaTramites } from "./backendConection";
import axios from "axios";
import { baseURL } from "./backendConection";

function AdminActionBoxE({ objetosBD, tramite }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState("");
    const [editedCosto, setEditedCosto] = useState("");
    const [editedDescripcion, setEditedDescripcion] = useState("");

    const handleSelectedObject = (objeto) => {
        axios
            .get(baseURL + `Product/GetProductByBarcode/${objeto.id}`)
            .then(function (response) {
                objeto.costo = response.data.cost;
                objeto.descripcion = response.data.description;
                
                setSelectedObject(objeto);
                setEditedID(objeto.id);
                setEditedCosto(objeto.costo);
                setEditedDescripcion(objeto.descripcion);
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

        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        // Hace falta adaptarlo
        // ---------- SET ---------- (informacion)
        // selectedObject.id = editedID; // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        selectedObject.descripcion = editedDescripcion;

        switch (tramite) {
            case listaTramites[1]:
                axios
                    .put(
                        baseURL +
                            `Spa/UpdateDescriptionSpaTreatment?name=${selectedObject.name}&newDescription=${editedDescripcion}`
                    )
                    .then(function (response) {})
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
                break;
            case listaTramites[2]:
                axios
                    .put(
                        baseURL +
                            `Job/UpdateDescriptionJob?name=${selectedObject.name}&newDescription=${editedDescripcion}`
                    )
                    .then(function (response) {})
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
                break;
            case listaTramites[4]:
                axios
                    .put(
                        baseURL +
                            `Services/UpdateDescriptionService?name=${selectedObject.name}&newDescription=${editedDescripcion}`
                    )
                    .then(function (response) {})
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
                break;
        }

        setEditMode(false);
    };

    return (
        <Container className="d-flex infoGestion">
            <div>
                <ObjectList
                    objetos={objetosBD}
                    tramite={tramite}
                    setObjectFunction={handleSelectedObject}
                />
            </div>
            <div
                className="d-flex"
                style={{
                    flexDirection: "column",
                    width: "400px",
                }}
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
                                    disabled
                                />
                                <Form.Control
                                    placeholder="Costo"
                                    value={editedCosto}
                                    onChange={(e) =>
                                        setEditedCosto(e.target.value)
                                    }
                                    disabled
                                />
                                <Form.Control
                                    placeholder="Descripción"
                                    value={editedDescripcion}
                                    onChange={(e) =>
                                        setEditedDescripcion(e.target.value)
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
                                    ID: {selectedObject.id}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Costo: {selectedObject.costo}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Descripción: {selectedObject.descripcion}
                                </p>
                                {tramite == listaTramites[5] ? (
                                    <></>
                                ) : (
                                    <Button
                                        onClick={handleEditClick}
                                        style={{
                                            width: "100%",
                                            background: "#1382C9",
                                        }}
                                    >
                                        {" "}
                                        ✎{" "}
                                    </Button>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxE;
