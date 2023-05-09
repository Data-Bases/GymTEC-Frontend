import React, { useState } from "react";
import ObjectList from "./ObjectList";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { baseURL } from "./backendConection";

function AdminActionBoxD({ objetosBD, sucursal }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState("");
    const [editedTipoEquipo, setEditedTipoEquipo] = useState("");
    const [editedMarca, setEditedMarca] = useState("");
    const [editedSucursal, setEditedSucursal] = useState("");
    const [editedCosto, setEditedCosto] = useState("");

    const handleSelectedObject = (objeto) => {
        axios
            .get(
                baseURL +
                    `MachineInventory/GetMachineInventory/${sucursal}/${objeto.id}`
            )
            .then(function (response) {
                objeto.tipoEquipo = response.data.equipmentName;
                objeto.marca = response.data.brand;
                objeto.costo = response.data.price;
                objeto.sucursal = response.data.branchName;
                setSelectedObject(objeto);

                setEditedID(objeto.id);
                setEditedTipoEquipo(objeto.tipoEquipo);
                setEditedMarca(objeto.marca);
                setEditedSucursal(objeto.sucursal);
                setEditedCosto(objeto.costo);
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
        // ---------- SET ---------- (informacion)
        selectedObject.id = editedID; // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        selectedObject.tipoEquipo = editedTipoEquipo;
        selectedObject.marca = editedMarca;
        selectedObject.sucursal = editedSucursal;
        selectedObject.costo = editedCosto;

        setEditMode(false);
    };

    return (
        <Container className="d-flex infoGestion">
            <div>
                <ObjectList
                    objetos={objetosBD}
                    setObjectFunction={handleSelectedObject}
                />
            </div>
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
                                    placeholder="Tipo de Equipo"
                                    value={editedTipoEquipo}
                                    onChange={(e) =>
                                        setEditedTipoEquipo(e.target.value)
                                    }
                                />
                                <Form.Control
                                    placeholder="Marca"
                                    value={editedMarca}
                                    onChange={(e) =>
                                        setEditedMarca(e.target.value)
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
                                    placeholder="Costo"
                                    value={editedCosto}
                                    onChange={(e) =>
                                        setEditedCosto(e.target.value)
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
                                    Tipo de equipo: {selectedObject.tipoEquipo}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Marca: {selectedObject.marca}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Sucursal: {selectedObject.sucursal}
                                </p>
                                <p
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Costo: {selectedObject.costo}
                                </p>
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
                            </div>
                        )}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxD;
