import React, { useState } from 'react';
import ObjectList from './ObjectList';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminActionBoxC({ objetosBD, tramite }) {
    const [selectedObject, setSelectedObject] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedID, setEditedID] = useState('');
    const [editedProvincia, setEditedProvincia] = useState('');
    const [editedCanton, setEditedCanton] = useState('');
    const [editedDistrito, setEditedDistrito] = useState('');
    const [editedPuesto, setEditedPuesto] = useState('');
    const [editedSucursal, setEditedSucursal] = useState('');
    const [editedTipoPlanilla, setEditedTipoPlanilla] = useState('');
    const [editedSalario, setEditedSalario] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    const handleSelectedObject = (objeto) => {
        setSelectedObject(objeto);
        setEditedID(objeto.id)

        setEditedProvincia(objeto.provincia)
        setEditedCanton(objeto.canton)
        setEditedDistrito(objeto.distrito)

        setEditedPuesto(objeto.puesto)
        setEditedSucursal(objeto.sucursal)
        setEditedTipoPlanilla(objeto.tipoPlanilla)
        setEditedSalario(objeto.salario)
        setEditedEmail(objeto.email)

        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {

        // ---------- SET ---------- (informacion)
        selectedObject.id = editedID // En vez de esto se puede hacer un GET (mas seguro, menos rapido)

        selectedObject.provincia = editedProvincia
        selectedObject.canton = editedCanton
        selectedObject.distrito = editedDistrito

        selectedObject.puesto = editedPuesto
        selectedObject.sucursal = editedSucursal
        selectedObject.tipoPlanilla = editedTipoPlanilla
        selectedObject.salario = editedSalario
        selectedObject.email = editedEmail

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
                                <div className="d-flex">
                                    <Form.Control placeholder='Provincia' value={editedProvincia} onChange={(e) => setEditedProvincia(e.target.value)} />
                                    <Form.Control placeholder='Canton' value={editedCanton} onChange={(e) => setEditedCanton(e.target.value)} />
                                    <Form.Control placeholder='Distrito' value={editedDistrito} onChange={(e) => setEditedDistrito(e.target.value)} />
                                </div>
                                <Form.Control placeholder='Puesto' value={editedPuesto} onChange={(e) => setEditedPuesto(e.target.value)} />
                                <Form.Control placeholder='Sucursal' value={editedSucursal} onChange={(e) => setEditedSucursal(e.target.value)} />
                                <Form.Control placeholder='Tipo de Planilla' value={editedTipoPlanilla} onChange={(e) => setEditedTipoPlanilla(e.target.value)} />
                                <Form.Control placeholder='Salario' value={editedSalario} onChange={(e) => setEditedSalario(e.target.value)} />
                                <Form.Control placeholder='Email' value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                                <Button onClick={handleSaveClick} style={{ width: '100%', background: '#1382C9' }}> ✓ </Button>
                            </div>
                            :
                            <div className="d-flex" style={{ justifyContent: 'start', flexDirection: 'column' }}>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>ID: {selectedObject.id}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Direccion: {selectedObject.provincia + ","} {selectedObject.canton + ","} {selectedObject.distrito}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Puesto: {selectedObject.puesto}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Sucursal: {selectedObject.sucursal}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Tipo de Planilla: {selectedObject.tipoPlanilla}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Salario: {selectedObject.salario}</p>
                                <p style={{ whiteSpace: "pre-wrap", overflowWrap: 'break-word' }}>Email: {selectedObject.email}</p>
                                <Button onClick={handleEditClick} style={{ width: '100%', background: '#1382C9' }}> ✎ </Button>
                            </div>}
                    </>
                )}
            </div>
        </Container>
    );
}

export default AdminActionBoxC;
