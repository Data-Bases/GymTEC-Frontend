import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ObjectList = ({ objetos }) => {

    // Estados
    const [selected, setSelected] = useState(''); // Nombre del objeto seleccionado
    const [isEditing, setIsEditing] = useState(false); // Valor booleano para saber si se esta editando un objeto 
    const [editedObjeto, setEditedObjeto] = useState(''); // Nombre del objeto editado
    const [newObjeto, setNewObjeto] = useState(''); // Nombre del nuevo objeto
    const [isAddDisabled, setIsAddDisabled] = useState(true); // Valor booleano para saber si el boton '+' debe estar descativado

    // Funciones
    const handleClick = (objeto) => { // Controlador al hacer click en un objeto de la lista
        setSelected(objeto);
        // console.log(objeto);
        // console.log(objetos);
    };

    const handleDoubleClick = (objeto) => { // Controlador al hacer doble click en un objeto de la lista
        console.log(objeto)
        setEditedObjeto(objeto);
        setIsEditing(true);
    };

    const handleEditInputChange = (event) => { // Controlador para guardar el nuevo nombre del objeto en un estado
        setEditedObjeto(event.target.value);
    };

    const handleEditSubmit = (event) => { // Controlador para guardar el nuevo nombre del objeto
        event.preventDefault();
        const index = objetos.findIndex((objeto) => objeto === selected);
        objetos[index] = editedObjeto;
        setIsEditing(false);
    };

    const handleDelete = (objeto) => { // Controlador para eliminar un objeto
        const index = objetos.findIndex((o) => o === objeto);
        objetos.splice(index, 1);
        setIsEditing(false);
    };

    const handleNewInputChange = (event) => { // Controlador para guardar el nombre del nuevo objeto en un estado
        setNewObjeto(event.target.value);
        if (event.target.value === '') {
            setIsAddDisabled(true)
        }
        else {
            setIsAddDisabled(false)
        }
    };

    const handleNewSubmit = (event) => { // Controlador para guardar el nuevo objeto
        event.preventDefault();
        objetos.push(newObjeto);
        setNewObjeto('');
        setIsAddDisabled(true)
    };

    const renderObjetos = () => {
        return objetos.map((objeto, i) => {
            if (isEditing && (selected === objeto)) { // Renderizar el objeto al que se le hace doble click si se esta editando y hay un objeto seleccionado
                return (
                    <form onSubmit={handleEditSubmit} key={i}>
                        <input
                            type="text"
                            value={editedObjeto}
                            onChange={handleEditInputChange}
                            className="mb-2 form-control"
                        />
                        <Button type="submit" variant="success" className="mb-2">✓</Button>
                        <Button variant="danger" className="mb-2 ml-2" onClick={() => handleDelete(objeto)}>⌫</Button>
                    </form>
                );
            }
            else { // Renderizar el objeto al que se le hace click
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

    // Return
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
                    <Button type="submit" variant="dark" className="ml-auto" disabled={isAddDisabled}>+</Button>
                </div>
            </form>
        </div>
    );
};

export default ObjectList;