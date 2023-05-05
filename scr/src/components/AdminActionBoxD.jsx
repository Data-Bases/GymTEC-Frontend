import React, { useState } from 'react';
import ObjectList from './ObjectList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminActionBoxD({ objetosBD }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState('');
    const [editedTipoEquipo, setEditedTipoEquipo] = useState('');
    const [editedMarca, setEditedMarca] = useState('');
    const [editedSucursal, setEditedSucursal] = useState('');
    const [editedCosto, setEditedCosto] = useState('');

    const handleSelectedObject = (objeto) => {
        setSelectedObject(objeto);

        setEditedID(objeto.identificador)
        setEditedTipoEquipo(objeto.tipoEquipo)
        setEditedMarca(objeto.marca)
        setEditedSucursal(objeto.sucursal)
        setEditedCosto(objeto.costo)

        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {

        // ---------- SET ---------- (informacion)
        selectedObject.identificador = editedID // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        selectedObject.tipoEquipo = editedTipoEquipo
        selectedObject.marca = editedMarca
        selectedObject.sucursal = editedSucursal
        selectedObject.costo = editedCosto

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
            <div style={{ padding: '0 50px 0 0' }}><ObjectList objetos={objetosBD} setObjectFunction={handleSelectedObject} /></div>
            <div className="d-flex" style={{ padding: '0 0 0 50px', flexDirection: 'column', width: '400px' }}>
                <h2>Información:</h2>
                {selectedObject && (
                    <>
                        {editMode ?
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <Form.Control placeholder='ID' value={editedID} onChange={(e) => setEditedID(e.target.value)} />
                                <Form.Control placeholder='Tipo de Equipo' value={editedTipoEquipo} onChange={(e) => setEditedTipoEquipo(e.target.value)} />
                                <Form.Control placeholder='Marca' value={editedMarca} onChange={(e) => setEditedMarca(e.target.value)} />
                                <Form.Control placeholder='Sucursal' value={editedSucursal} onChange={(e) => setEditedSucursal(e.target.value)} />
                                <Form.Control placeholder='Costo' value={editedCosto} onChange={(e) => setEditedCosto(e.target.value)} />
                                <Button onClick={handleSaveClick} style={{ width: '100%', background: '#1382C9'}}> ✓ </Button>
                            </div>
                            :
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>ID: {selectedObject.identificador}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Tipo de equipo: {selectedObject.tipoEquipo}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Marca: {selectedObject.marca}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Sucursal: {selectedObject.sucursal}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Costo: {selectedObject.costo}</p>
                                <Button onClick={handleEditClick} style={{ width: '100%', background: '#1382C9'}}> ✎ </Button>
                            </div>}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxD;
