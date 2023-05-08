import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "wouter";
import '../styles/custom.scss';

function NavigationBar() {
  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <Navbar variant="light" fixed="bottom" className="navbar">
      <Nav className="mx-auto" onSelect={handleSelect}>
        <Link href="/gestion/Información">
          <Nav.Link eventKey="Gestion">Gestion</Nav.Link>
        </Link>
        <Link href="/configuracion/Clases">
          <Nav.Link eventKey="Configuración">Configuración</Nav.Link>
        </Link>
        <Link href="/planilla/">
          <Nav.Link eventKey="Plantilla">Plantilla</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
