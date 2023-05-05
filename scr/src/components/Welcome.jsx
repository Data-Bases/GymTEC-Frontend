import { Link } from "wouter";
import React from "react";

import { Button, Container } from "react-bootstrap";


function Welcome(){

    return(
        <Container>
            <Link href="/signup">
                <Button variant="secondary">
                    Registrarse
                </Button>
            </Link>
            <Link href="/login">
                <Button variant="secondary">
                    Ingresar
                </Button>
            </Link>
        </Container>
    )
}

export default Welcome