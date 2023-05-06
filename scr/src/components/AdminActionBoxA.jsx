import React, { useState } from 'react';
import ObjectList from './ObjectList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminActionBoxA({ objetosBD, tramite }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState('');
    // console.log(objetosBD)
    const handleSelectedObject = (objeto) => {
        setSelectedObject(objeto);
        setEditedID(objeto.id)

        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {

        // ---------- SET ---------- (informacion)
        selectedObject.id = editedID // En vez de esto se puede hacer un GET (mas seguro, menos rapido)

        setEditMode(false);
    };

    return (
        <Container
            className="d-flex"
            style={{
                backgroundColor: '#7DB54E',
                padding: '50px',
                width: '1000px',
                borderRadius: '10px',
                justifyContent: 'center'
            }}
        >
            <div style={{ padding: '0 50px 0 0' }}><ObjectList objetos={objetosBD} tramite={tramite} setObjectFunction={handleSelectedObject} /></div>
            <div className="d-flex" style={{ padding: '0 0 0 50px', flexDirection: 'column', width: '400px' }}>
                <h2>Información:</h2>
                {selectedObject && (
                    <>
                        {editMode ?
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <Form.Control placeholder='ID' value={editedID} onChange={(e) => setEditedID(e.target.value)} />
                                <Button onClick={handleSaveClick} style={{ width: '100%', background: '#1382C9'}}> ✓ </Button>
                            </div>
                            :
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>ID: {selectedObject.id}</p>
                                <Button onClick={handleEditClick} style={{ width: '100%', background: '#1382C9'}}> ✎ </Button>
                            </div>}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxA;
