import React, { useEffect } from "react";
import { ButtonGroup, Button, Card, Container } from "react-bootstrap";
import "../styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { baseURL } from "./backendConection";

function CalendarTask({ type, start, end, id, setBook}) {
    return (
        <Card className="task"
        onClick={() => setBook(id)}>
            <Card.Header className="fs-6">{type}</Card.Header>
            <Card.Body>
                <div className="task-color"></div>
                <Card.Title className="fs-2">{start}</Card.Title>
                <Card.Text>a {end}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function Calendar({ objetosBD, setStart, setEnd, setBook }) {
    const [tasks, setTasks] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const [services, setServices] = React.useState([]);
    const handleSelect = (eventKey) => {
        console.log(eventKey);
    };

    console.log(objetosBD);

    useEffect(() => {
        axios
            .get(baseURL + `Services/GetServicesNames`)
            .then(function (response) {
                setServices(response.data);
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
        objetosBD.map((obj) => {
            obj.type = services[obj.idServices - 1].name;
        });
    }, [objetosBD]);

    return (
        <Container className="calendar">
            Inicio:{" "}
            <input
                type="date"
                onChange={(event) => {
                    setStart(event.target.value);
                }}
            ></input>
            Final:{" "}
            <input
                type="date"
                onChange={(event) => {
                    setEnd(event.target.value);
                }}
            ></input>
            {objetosBD.map((objetos) => (
                <CalendarTask
                    type={objetos.type}
                    start={objetos.startTime}
                    end={objetos.endTime}
                    key={objetos.id}
                    id={objetos.id}
                    setBook = {setBook}
                />
            ))}
        </Container>
    );
}

export default Calendar;
