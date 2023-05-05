import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import { baseURL } from "./backendConection";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const sendData = () => {
    axios
      .get(baseURL + `Employee/EmployeeLogIn/${user}?password=${password}`)
      .then(function (response) {
        console.log("Enviado", response)
        if (response.data.token) {
            //Se almacena el token en el navegador
            localStorage.setItem("_token", token);
            console.log(localStorage.getItem("_token"))
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
  };

  return (
    <Container className="bg-dark">
      <input
        type="email"
        placeholder="User"
        onChange={(event) => setUser(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="primary" onClick={() => sendData()}>
        {" "}
        Ingresar{" "}
      </Button>
    </Container>
  );
}

export default Login;
