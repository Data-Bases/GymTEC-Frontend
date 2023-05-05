import React, { useState } from 'react';
import ObjectList from './ObjectList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminActionBoxB({ objetosBD }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState('');
    const [editedDescripcion, setEditedDescripcion] = useState('');

    const handleSelectedObject = (objeto) => {
        setSelectedObject(objeto);
        setEditedID(objeto.identificador)
        setEditedDescripcion(objeto.descripcion)

        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {

        // ---------- SET ---------- (informacion)
        selectedObject.identificador = editedID // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        selectedObject.descripcion = editedDescripcion

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
                justifyContent: 'center'
            }}
        >
            <div style={{ padding: '0 50px 0 0' }}><ObjectList objetos={objetosBD} setObjectFunction={handleSelectedObject} /></div>
            <div className="d-flex" style={{ padding: '0 0 0 50px', flexDirection: 'column', width: '400px' }}>
                <h2>Información:</h2>
                {selectedObject && (
                    <>
                        {editMode ?
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <Form.Control placeholder='ID' value={editedID} onChange={(e) => setEditedID(e.target.value)} />
                                <Form.Control placeholder='Descripción' value={editedDescripcion} onChange={(e) => setEditedDescripcion(e.target.value)} />
                                <Button variant="success" onClick={handleSaveClick} style={{ width: '100%' }}> ✓ </Button>
                            </div>
                            :
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>ID: {selectedObject.identificador}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Descripción: {selectedObject.descripcion}</p>
                                <Button variant="success" onClick={handleEditClick} style={{ width: '100%' }}> ✎ </Button>
                            </div>}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxB;
