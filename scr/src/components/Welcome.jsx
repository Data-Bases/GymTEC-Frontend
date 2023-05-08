import { Link } from "wouter";
import React from "react";

import { Button, Container } from "react-bootstrap";
import '../styles/custom.scss'
import logo from "../assets/logo.svg";


function Welcome(){

    return(
        <div className="welcome d-flex mx-0 h-100" >
            <img src={logo} alt="GYMTEC" className="logo" />
            <Link href="/signup">
                <Button variant="secondary-outline" className="Button btnWel">
                    Registrarse
                </Button>
            </Link>
            <Link href="/login">
                <Button variant="secondary-outline" className="Button btnWel">
                    Ingresar
                </Button>
            </Link>
        </div>
    )
}

export default Welcome