import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TwoObjectList from "./TwoObjectList";
import { listaConfigs } from "./backendConection";
import axios from "axios";
import { baseURL } from "./backendConection";


function AdminConfigBox({ tramite, sucursal }) {
    const [inBranch, setInBranch] = useState([]);
    const [outBranch, setOutBranch] = useState([]);

    useEffect(() => {
        switch (tramite) {
            case listaConfigs[1]:
                axios
                    .get(baseURL + `Spa/GetSpaTreatmentsInBranch/${sucursal}`)
                    .then(function (response) {
                        setInBranch(response.data);
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

                axios
                    .get(
                        baseURL + `Spa/GetSpaTreatmentsNotInBranch/${sucursal}`
                    )
                    .then(function (response) {
                        setOutBranch(response.data);
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
            case listaConfigs[2]:
                axios
                    .get(baseURL + `Product/GetProductsInBranch/${sucursal}`)
                    .then(function (response) {
                        setInBranch(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // GET response with a status code not in range 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            if (error.response.status == 404){
                                setInBranch([])
                            }
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

                axios
                    .get(baseURL + `Product/GetProductsNotInBranch/${sucursal}`)
                    .then(function (response) {
                        response.data.map((obj) => {
                            obj.id = obj.barcode;
                        });
                        setOutBranch(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // GET response with a status code not in range 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            if (error.response.status == 404){
                                setOutBranch([])
                            }
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
            case listaConfigs[3]:
                axios
                    .get(
                        baseURL +
                            `MachineInventory/GetMachineInventoryInBranch/${sucursal}`
                    )
                    .then(function (response) {
                        response.data.map((obj) => {
                            obj.id = obj.serialNumber;
                            obj.name = obj.equipmentName + " (" + obj.serialNumber + ")";
                        })
                        setInBranch(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // GET response with a status code not in range 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            if (error.response.status == 404){
                                setInBranch([])
                            }
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

                axios
                    .get(
                        baseURL +
                            `MachineInventory/GetMachineInventoryNotInBranch/${sucursal}`
                    )
                    .then(function (response) {
                        setOutBranch(response.data);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // GET response with a status code not in range 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            if (error.response.status == 404){
                                setOutBranch([])
                            }
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

    return (
        <div>
            <TwoObjectList objetos1={inBranch} objetos2={outBranch} tramite={tramite}/>
        </div>
    );
}

export default AdminConfigBox;
