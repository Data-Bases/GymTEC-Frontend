import React from "react";
import { Dropdown } from "react-bootstrap";
import AdminActionBoxB from "./AdminActionBoxB";

function Planilla() {
    
    const [infoBD, setInfoBD] = useState([]);
    return (
        <div className="d-flex h-100 w-100 gestion">
            <div className="d-flex h-100 flex-column">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {sucursal}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                        onClick={(event) => setSucursal(event.target.innerText)}
                    >
                        {listaSucursales.map((nombre) => (
                            <Dropdown.Item key={nombre}>{nombre}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {tramite}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {listaTramites.map((nombre) => (
                            <Link key={nombre} href={`/gestion/${nombre}`}>
                                <Dropdown.Item key={nombre}>
                                    {nombre}
                                </Dropdown.Item>
                            </Link>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <AdminActionBoxB objetosBD={infoBD} tramite={"Planilla"}>
        </div>
    );
}