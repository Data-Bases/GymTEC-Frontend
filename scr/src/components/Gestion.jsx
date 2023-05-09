import React, { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "./backendConection";
import { Link } from "wouter";
import AdminViewSucursal from "./AdminViewSucursal";
import AdminActionBoxB from "./AdminActionBoxB";
import AdminActionBoxC from "./AdminActionBoxC";
import AdminActionBoxD from "./AdminActionBoxD";
import AdminActionBoxE from "./AdminActionBoxE";
import "../styles/custom.scss";
import { listaTramites } from "./backendConection";

function Gestion({ tramite }) {
    const [sucursal, setSucursal] = useState("GymASETEC");
    const [listaSucursales, setSucursales] = useState([]);
    const [infoBD, setInfoBD] = useState([]);
    const [ready, setReady] = useState("");
    tramite = decodeURI(tramite);
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

    useEffect(() => {
        switch (tramite) {
            case listaTramites[0]:
                axios
                    .get(baseURL + `Branch/GetBranch/${sucursal}`)
                    .then(function (response) {
                        // console.log(response.data);
                        setInfoBD(response.data);
                        setReady(listaTramites[0]);
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
                break;
            case listaTramites[1]:
                axios
                    .get(baseURL + `Spa/GetSpaTreatmentsInBranch/${sucursal}`)
                    .then(function (response) {
                        setInfoBD(response.data);
                        setReady(listaTramites[1]);
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
                break;
            case listaTramites[2]:
                axios
                    .get(baseURL + `Job/GetJobsNames`)
                    .then(function (response) {
                        setInfoBD(response.data);
                        setReady(listaTramites[2]);
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
                break;
            case listaTramites[3]:
                axios
                    .get(
                        baseURL +
                            `Employee/GetEmployeesSalaryByBranch/${sucursal}`
                    )
                    .then(function (response) {
                        console.log(response.data);
                        response.data.map((obj) => {
                            obj.id = obj.employeeId;
                            obj.name = obj.fullName;
                        });
                        setInfoBD(response.data);
                        setReady(listaTramites[3]);
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
                break;
            case listaTramites[4]:
                axios
                    .get(baseURL + `Services/GetServicesNames`)
                    .then(function (response) {
                        setInfoBD(response.data);
                        setReady(listaTramites[4]);
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
                break;
            case listaTramites[5]:
                axios
                    .get(baseURL + `Equipment/GetEquipmentNames`)
                    .then(function (response) {
                        setInfoBD(response.data);
                        setReady(listaTramites[5]);
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
                break;
            case listaTramites[6]:
                axios
                    .get(
                        baseURL +
                            `MachineInventory/GetMachineInventoryInBranch/${sucursal}`
                    )
                    .then(function (response) {
                        response.data.map((obj) => {
                            obj.id = obj.serialNumber;
                            obj.name =
                                obj.equipmentName +
                                " (" +
                                obj.serialNumber +
                                ")";
                        });
                        setInfoBD(response.data);
                        setReady(listaTramites[6]);
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

                break;
            case listaTramites[7]:
                axios
                    .get(baseURL + `Product/GetProducts`)
                    .then(function (response) {
                        response.data.map((obj) => {
                            obj.id = obj.barcode;
                            obj.name = obj.name;
                        });
                        setInfoBD(response.data);
                        setReady(listaTramites[7]);
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

                break;
        }
    }, [tramite, sucursal]);

    const handleTramite = () => {
        switch (tramite) {
            case listaTramites[0]:
                if (ready == listaTramites[0]) {
                    return <AdminViewSucursal objetosBD={infoBD} sucursal={sucursal} />;
                }
                break;
            case listaTramites[1]:
                if (ready == listaTramites[1]) {
                    return (
                        <AdminActionBoxB objetosBD={infoBD} tramite={tramite} />
                    );
                }
                break;
            case listaTramites[2]:
                if (ready == listaTramites[2]) {
                    return (
                        <AdminActionBoxB objetosBD={infoBD} tramite={tramite} />
                    );
                }
                break;
            case listaTramites[3]:
                if (ready == listaTramites[3]) {
                    return <AdminActionBoxC objetosBD={infoBD} />;
                }
                break;
            case listaTramites[4]:
                if (ready == listaTramites[4]) {
                    return (
                        <AdminActionBoxB objetosBD={infoBD} tramite={tramite} />
                    );
                }
                break;
            case listaTramites[5]:
                if (ready == listaTramites[5]) {
                    return (
                        <AdminActionBoxB objetosBD={infoBD} tramite={tramite} />
                    );
                }
                break;
            case listaTramites[6]:
                if (ready == listaTramites[6]) {
                    return (
                        <AdminActionBoxD
                            objetosBD={infoBD}
                            sucursal={sucursal}
                        />
                    );
                }
                break;
            case listaTramites[7]:
                if (ready == listaTramites[7]) {
                    return <AdminActionBoxE objetosBD={infoBD} />;
                }
                break;
        }
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
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {tramite}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {listaTramites.map((nombre) => (
                            <Link key={nombre} href={`/gestion/${nombre}`}>
                                <Dropdown.Item key={nombre}>
                                    {nombre}
                                </Dropdown.Item>
                            </Link>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {handleTramite()}
        </div>
    );
}

export default Gestion;
