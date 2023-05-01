import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Nav className="mx-auto" onSelect={handleSelect}>
        <Nav.Link eventKey="Gestion">Gestion</Nav.Link>
        <Nav.Link eventKey="Configuración">Configuración</Nav.Link>
        <Nav.Link eventKey="Plantilla">Plantilla</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;