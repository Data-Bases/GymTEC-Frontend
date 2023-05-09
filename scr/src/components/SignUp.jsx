import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "./backendConection";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "wouter";

function SignUp() {
    const [location, navigate] = useLocation();

    const createClient = (event) => {
        event.preventDefault();
        const obj = event.target;
        axios
            .post(baseURL + `Client/CreateClient`, {
                //Body
                id: obj.cedula.value,
                name: obj.nombre.value,
                lastName1: obj.ape1.value,
                lastName2: obj.ape2.value,
                province: obj.provincia.value,
                canton: obj.canton.value,
                district: obj.distrito.value,
                email: obj.email.value,
                password: obj.password.value,
                weight: obj.peso.value,
                imc: obj.imc.value,
                birthday: obj.fecha.value,
            })
            .then(function (response) {
                console.log(response.data);
                navigate("/login");
            })
            .catch(function (error) {
                alert("Los datos son incorrectos");
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
    };
    return (
        <div className="signup p-5 d-flex">
            <form onSubmit={createClient} className="d-flex signup-form">
                <input type="text" id="cedula" placeholder="Cédula" required />
                <input type="text" id="nombre" placeholder="Nombre" required />
                <input
                    type="text"
                    id="ape1"
                    placeholder="Primer Apellido"
                    required
                />
                <input
                    type="text"
                    id="ape2"
                    placeholder="Segundo Apellido"
                    required
                />
                <input
                    type="text"
                    id="provincia"
                    placeholder="Provincia"
                    required
                />
                <input type="text" id="canton" placeholder="Cantón" required />
                <input
                    type="text"
                    id="distrito"
                    placeholder="Distrito"
                    required
                />
                <input
                    type="date"
                    id="fecha"
                    placeholder="Fecha de Nacimiento"
                    required
                />
                <input type="text" id="peso" placeholder="Peso" required />
                <input type="text" id="imc" placeholder="IMC" required />
                <input type="email" id="email" placeholder="Email" required />
                <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    required
                />
                <Button type="submit" variant="primary">
                    Registrarse
                </Button>
                <Link href="/">
                    <Button variant="secondary">Regresar</Button>
                </Link>
            </form>
        </div>
    );
}

export default SignUp;
