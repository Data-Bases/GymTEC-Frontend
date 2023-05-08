import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TwoObjectList = ({ objetos1, objetos2, tramite }) => {
  const [selectedID1, setSelectedID1] = useState(0); // ID del objeto seleccionado en la primera lista
  const [selectedID2, setSelectedID2] = useState(0); // ID del objeto seleccionado en la segunda lista

  const handleSelect1 = (objeto) => { // Controlador al hacer click en un objeto de la primera lista
    setSelectedID1(objeto.id);
    console.log(objetos1)
  };

  const handleSelect2 = (objeto) => { // Controlador al hacer click en un objeto de la segunda lista
    setSelectedID2(objeto.id);
    console.log(objetos2)
  };

  const handleMoveTo2 = () => { // Controlador para mover un objeto de la primera lista a la segunda
    if (selectedID1) {

      const index = objetos1.findIndex((o) => o.id === selectedID1);

      // ---------- PUT ----------

      objetos2.push({ // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        name: objetos1[index].name,
        id: parseInt(objetos1[index].id)
      });

      // ---------- SET ---------- 

      objetos1.splice(index, 1); // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
      setSelectedID1(0);
    }
  };

  const handleMoveTo1 = () => { // Controlador para mover un objeto de la segunda lista a la primera
    if (selectedID2) {

      const index = objetos2.findIndex((o) => o.id === selectedID2);

      // ---------- PUT ----------

      objetos1.push({ // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
        name: objetos2[index].name,
        id: parseInt(objetos2[index].id)
      });

      // ---------- SET ---------- 

      objetos2.splice(index, 1); // En vez de esto se puede hacer un GET (mas seguro, menos rapido)
      setSelectedID2(0);
    }
  };

  const renderObjetos1 = () => { // Renderiza los objetos de la primera lista
    return objetos1.map((objeto) => {
      return (
        <Button
          key={objeto.id || 1}
          variant={selectedID1 === objeto.id ? 'primary' : 'light'}
          className="mb-2"
          style={{ width: '100%' }}
          onClick={() => handleSelect1(objeto)}
        >
          {objeto.name}
        </Button>
      );
    });
  };

  const renderObjetos2 = () => { // Renderiza los objetos de la primera segunda
    return objetos2.map((objeto) => {
      return (
        <Button
          key={objeto.id || 1}
          variant={selectedID2 === objeto.id ? 'primary' : 'light'}
          className="mb-2"
          style={{ width: '100%' }}
          onClick={() => handleSelect2(objeto)}
        >
          {objeto.name}
        </Button>
      );
    });
  };

  return (
    <div className="d-flex flex-row p-3" style={{ backgroundColor: '#f8f9fa', width: '800px', height: '500px', border: '1px solid black' }}>
      <div className="d-flex flex-column" style={{ width: '45%' }}>
        <h5>{tramite} Asociados</h5>
        <hr />
        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>{renderObjetos1()}</div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '10%' }}>
        <Button variant="dark" onClick={handleMoveTo2} disabled={!selectedID1}>→</Button>
        <Button variant="dark" onClick={handleMoveTo1} disabled={!selectedID2}>←</Button>
      </div>
      <div className="d-flex flex-column" style={{ width: '45%' }}>
        <h5>{tramite} no Asociados</h5>
        <hr />
        <div style={{ overflowY: 'auto', maxHeight: '500px' }}>{renderObjetos2()}</div>
      </div>
    </div>
  );
};

export default TwoObjectList;