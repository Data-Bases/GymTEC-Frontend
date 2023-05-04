import React from 'react';
import ObjectList from './ObjectList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminActionBoxA({ objetosBD }) {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{
                backgroundColor: 'darkgray',
                padding: '50px',
                width: '600px',
                borderRadius: '10px'
            }}
        >
            <ObjectList objetos={objetosBD} ></ObjectList>
        </Container>
    );
};

export default AdminActionBoxA;
