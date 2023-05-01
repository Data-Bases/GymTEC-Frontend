import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ObjectList = ({ objetos }) => {
    const [selected, setSelected] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editedObjeto, setEditedObjeto] = useState('');
    const [newObjeto, setNewObjeto] = useState('');
    const [isNewObjeto, setIsNewObjeto] = useState(true);

    const handleClick = (objeto) => {
        setSelected(objeto);
        console.log(objeto);
        console.log(objetos);
    };

    const handleDoubleClick = (objeto) => {
        setEditedObjeto(objeto);
        setEditing(true);
    };

    const handleEditInputChange = (event) => {
        setEditedObjeto(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        const index = objetos.findIndex((objeto) => objeto === selected);
        objetos[index] = editedObjeto;
        setEditing(false);
        setEditedObjeto('');
    };

    const handleDelete = (objeto) => {
        const index = objetos.findIndex((o) => o === objeto);
        if (index !== -1) {
            objetos.splice(index, 1);
            setSelected(null);
            setEditing(false);
        }
    };

    const handleNewInputChange = (event) => {
        setNewObjeto(event.target.value);
        if (event.target.value === '') {
            setIsNewObjeto(true)
        } else {
            setIsNewObjeto(false)
        }

    };

    const handleNewSubmit = (event) => {
        event.preventDefault();
        objetos.push(newObjeto);
        setNewObjeto('');
        setIsNewObjeto(true)
    };

    const renderObjetos = () => {
        return objetos.map((objeto, i) => {
            if (editing && selected === objeto) {
                return (
                    <form onSubmit={handleEditSubmit} key={i}>
                        <input
                            type="text"
                            value={editedObjeto}
                            onChange={handleEditInputChange}
                            className="mb-2 form-control"
                        />
                        <Button type="submit" variant="success" className="mb-2">
                            ✓
                        </Button>
                        <Button
                            variant="danger"
                            className="mb-2 ml-2"
                            onClick={() => handleDelete(objeto)}
                        >
                            ⌫
                        </Button>
                    </form>
                );
            } else {
                return (
                    <Button
                        key={i}
                        variant={selected === objeto ? 'primary' : 'light'}
                        className="mb-2"
                        style={{ width: '100%' }}
                        onClick={() => handleClick(objeto)}
                        onDoubleClick={() => handleDoubleClick(objeto)}
                    >
                        {objeto}
                    </Button>
                );
            }
        });
    };

    return (
        <div
            className="d-flex flex-column p-3"
            style={{
                backgroundColor: '#f8f9fa',
                width: '400px',
                height: '500px',
                border: '1px solid black',
            }}
        >
            <div style={{ overflowY: 'auto', maxHeight: '450px' }}>
                {renderObjetos()}
            </div>
            <form onSubmit={handleNewSubmit} className="form-inline mt-3">
                <div className="d-flex">
                    <input
                        type="text"
                        value={newObjeto}
                        onChange={handleNewInputChange}
                        className="form-control mr-2 flex-grow-1 mx-2"
                        placeholder="¿?"
                        display='flex'
                    />
                    <Button type="submit" variant="dark" className="ml-auto" disabled={isNewObjeto}>
                        +
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ObjectList;
