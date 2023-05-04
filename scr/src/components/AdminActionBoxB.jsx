import React, { useState } from 'react';
import ObjectList from './ObjectList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminActionBoxB({ objetosBD }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState('');

    const handleSelectedObject = (objeto) => {
        setSelectedObject(objeto);
        setEditedText(objeto.informacion);
        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {

        // ---------- SET ---------- (informacion)
        selectedObject.informacion = editedText; // En vez de esto se puede hacer un GET (mas seguro, menos rapido)

        setEditMode(false);
    };

    return (
        <Container
            className="d-flex"
            style={{
                backgroundColor: 'darkgray',
                padding: '50px',
                width: '1000px',
                borderRadius: '10px',
                justifyContent: 'space-between'
            }}
        >
            <ObjectList objetos={objetosBD} setObjectFunction={handleSelectedObject} />
            <div className="d-flex " style={{ padding: '0 50px', flexDirection: 'column'}}>
                <h2>Info:</h2>
                {selectedObject && (
                    <>
                        {editMode ?
                            <Form className="d-flex align-items-start mt-3">
                                <Form.Control
                                    rows={1}
                                    cols={20}
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    style={{ width: '300px', maxWidth: '500px' }}
                                />
                                <Button variant="success" onClick={handleSaveClick} style={{ height: '40px', width: '40px', margin: '0 10px' }}> ✓ </Button>
                            </Form>
                            :
                            <div className="d-flex" style={{ justifyContent: 'start' }}>
                                <p style={{ whiteSpace: "pre-wrap", maxWidth: '300px', overflowWrap: 'break-word' }}>
                                    {selectedObject.informacion}
                                </p>
                                <Button variant="success" onClick={handleEditClick} style={{ height: '40px', width: '40px', margin: '0 10px' }}> ✎ </Button>
                            </div>}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxB;
