import React from "react";
import {Carousel, Card, Container } from "react-bootstrap";
import "../styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function CalendarTask() {
  return (
    <Card className="task">
      <Card.Header className="fs-6">Cycling</Card.Header>
      <Card.Body>
        <div className="task-color"></div>
        <Card.Title className="fs-2">6:00 pm</Card.Title>
        <Card.Text>a 7:00pm</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Calendar() {
  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <Container>
      <Container>
        <button className="border border-0 bg-transparent fs-5 fw-bold"> {"<"} </button>
        <h3 className="d-inline-block fs-6 mx-4 fw-normal">Semana</h3>
        <button className="border border-0 bg-transparent fs-5 fw-bold"> {">"} </button>
      </Container>
      
      <CalendarTask />
    </Container>
  );
}

export default Calendar;
