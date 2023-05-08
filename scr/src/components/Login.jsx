import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import { baseURL } from "./backendConection";
import axios from "axios";
import { useLocation } from "wouter";
import "../styles/custom.scss"


function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Client");
  const [location, navigate] = useLocation()

  const sendData = () => {
    if (type == "Employee")
    {
    axios
      .get(baseURL + `Employee/EmployeeLogIn/${user}?password=${password}`)
      .then(function (response) {
        // console.log("Enviado", response)
        if (response.data.id > 0) {
          //Se almacena el token en el navegador
          localStorage.setItem("userId", response.data.id);
          navigate("/gestion/Información")
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch(function (error) {
        if (error.response) {
          // GET response with a status code not in range 2xx
          console.log("Error", error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert("El servidor no respondió correctamente, codigo de error: " + error.response.status)
        } else if (error.request) {
          // no response
          console.log(error.request);
          alert("Error al conectar con el Servidor")
          // instance of XMLHttpRequest in the browser
          // instance ofhttp.ClientRequest in node.js
        } else {
          // Something wrong in setting up the request
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    }
    else
    {
      axios
      .get(baseURL + `Client/ClientLogIn/${user}?password=${password}`)
      .then(function (response) {
        // console.log("Enviado", response)
        if (response.data.id > 0) {
          //Se almacena el token en el navegador
          localStorage.setItem("userId", response.data.id);
          navigate(`/cliente/${localStorage.getItem("userId")}`)
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch(function (error) {
        if (error.response) {
          // GET response with a status code not in range 2xx
          console.log("Error", error.response.data);
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
    }
  };

  return (
    <div className="h-100 w-100 bg-dark d-flex login">
      <form className="text-light d-flex login-form">
        <input
          type="email"
          placeholder="Cédula"
          onChange={(event) => setUser(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div onChange={(event) => setType(event.target.id)}>
          <input
            type="radio"
            name="loginType"
            id="Client"
            defaultChecked
          />{" "}
          Soy Cliente
          <input
            type="radio"
            name="loginType"
            id="Employee"
          />{" "}
          Soy Empleado
        </div>
        <Button variant="primary" onClick={() => sendData()}>
          {" "}
          Ingresar{" "}
        </Button>
      </form>
    </div>
  );
}

export default Login;
