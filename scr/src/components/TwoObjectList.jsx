import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TwoObjectList = ({ objetos1, objetos2 }) => {
  const [selected1, setSelected1] = useState('');
  const [selected2, setSelected2] = useState('');

  const handleSelect1 = (objeto) => { // Controlador al hacer click en un objeto de la primera lista
    setSelected1(objeto);
  };

  const handleSelect2 = (objeto) => { // Controlador al hacer click en un objeto de la segunda lista
    setSelected2(objeto);
  };

  const handleMoveTo2 = () => { // Controlador para mover un objeto de la primera lista a la segunda
    if (selected1) {
      objetos2.push(selected1);
      objetos1.splice(objetos1.indexOf(selected1), 1);
      setSelected1(null);
    }
  };

  const handleMoveTo1 = () => { // Controlador para mover un objeto de la segunda lista a la primera
    if (selected2) {
      objetos1.push(selected2);
      objetos2.splice(objetos2.indexOf(selected2), 1);
      setSelected2(null);
    }
  };

  const renderObjetos1 = () => { // Renderiza los objetos de la primera lista
    return objetos1.map((objeto, i) => {
      return (
        <Button
          key={i}
          variant={selected1 === objeto ? 'primary' : 'light'}
          className="mb-2"
          style={{ width: '100%' }}
          onClick={() => handleSelect1(objeto)}
        >
          {objeto}
        </Button>
      );
    });
  };

  const renderObjetos2 = () => { // Renderiza los objetos de la primera segunda
    return objetos2.map((objeto, i) => {
      return (
        <Button
          key={i}
          variant={selected2 === objeto ? 'primary' : 'light'}
          className="mb-2"
          style={{ width: '100%' }}
          onClick={() => handleSelect2(objeto)}
        >
          {objeto}
        </Button>
      );
    });
  };

  return (
    <div className="d-flex flex-row p-3" style={{ backgroundColor: '#f8f9fa', width: '800px', height: '500px', border: '1px solid black'  }}>
      <div className="d-flex flex-column" style={{ width: '45%'}}>
        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>{renderObjetos1()}</div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '10%' }}>
        <Button variant="secondary" onClick={handleMoveTo2} disabled={!selected1}>→</Button>
        <Button variant="secondary" onClick={handleMoveTo1} disabled={!selected2}>←</Button>
      </div>
      <div className="d-flex flex-column" style={{ width: '45%'}}>
        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>{renderObjetos2()}</div>
      </div>
    </div>
  );
};

export default TwoObjectList;