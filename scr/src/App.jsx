import { useState } from "react";
import ListRender from "./listRender";

import { pathToRegexp } from "path-to-regexp";
import { Router, Switch, Route, Link, useRoute } from "wouter";
import makeCachedMatcher from "wouter/matcher";

import AdminActionBoxA from './components/AdminActionBoxA';
import AdminActionBoxB from './components/AdminActionBoxB';
import AdminActionBoxC from './components/AdminActionBoxC';
import AdminActionBoxD from './components/AdminActionBoxD';
import Calendar from "./components/Calendar";

const puestos = [
  {
    nombre: 'Puesto 1',
    identificador: '1001',
    descripcion: 'Puesto 1 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 2',
    identificador: '1002',
    descripcion: 'Puesto 2 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 3',
    identificador: '1003',
    descripcion: 'Puesto 3 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 4',
    identificador: '1004',
    descripcion: 'Puesto 4 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 5',
    identificador: '1005',
    descripcion: 'Puesto 5 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 6',
    identificador: '1006',
    descripcion: 'Puesto 6 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 7',
    identificador: '1007',
    descripcion: 'Puesto 7 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 8',
    identificador: '1008',
    descripcion: 'Puesto 8 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 9',
    identificador: '1009',
    descripcion: 'Puesto 9 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 10',
    identificador: '10010',
    descripcion: 'Puesto 10 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 11',
    identificador: '10011',
    descripcion: 'Puesto 11 para hacer muchas cosas'
  },
  {
    nombre: 'Puesto 12',
    identificador: '10012',
    descripcion: 'Puesto 12 para hacer muchas cosas'
  }
];

const empleados = [
  {
    nombre: 'Empleado 1',
    identificador: '1001',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 1',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado1@gmail.com'
  },
  {
    nombre: 'Empleado 2',
    identificador: '1002',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 2 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado2@gmail.com'
  },
  {
    nombre: 'Empleado 3',
    identificador: '1003',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 3 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado3@gmail.com'
  },
  {
    nombre: 'Empleado 4',
    identificador: '1004',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 4 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado4@gmail.com'
  },
  {
    nombre: 'Empleado 5',
    identificador: '1005',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 5 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado5@gmail.com'
  },
  {
    nombre: 'Empleado 6',
    identificador: '1006',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 6 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado6@gmail.com'
  },
  {
    nombre: 'Empleado 7',
    identificador: '1007',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 7 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado7@gmail.com'
  },
  {
    nombre: 'Empleado 8',
    identificador: '1008',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 8 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado8@gmail.com'
  },
  {
    nombre: 'Empleado 9',
    identificador: '1009',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 9 ',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado9@gmail.com'
  },
  {
    nombre: 'Empleado 10',
    identificador: '10010',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 10',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado10@gmail.com'
  },
  {
    nombre: 'Empleado 11',
    identificador: '10011',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 11',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado11@gmail.com'
  },
  {
    nombre: 'Empleado 12',
    identificador: '10012',
    direccion: 'Cartago, Costa Rica',
    puesto: 'Puesto del empleado 12',
    sucursal: 'XXXXXXXXXXXXXXX',
    tipoPlanilla: 'XXXXXXXXXXXXXXXX',
    salario: '$1000000',
    email: 'empleado12@gmail.com'
  }
];

const inventario = [
  {
    nombre: 'Objeto 1',
    identificador: '1001',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 2',
    identificador: '1002',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 3',
    identificador: '1003',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 4',
    identificador: '1004',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 5',
    identificador: '1005',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 6',
    identificador: '1006',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 7',
    identificador: '1007',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 8',
    identificador: '1008',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 9',
    identificador: '1009',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 10',
    identificador: '10010',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 11',
    identificador: '10011',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
  {
    nombre: 'Objeto 12',
    identificador: '10012',
    tipoEquipo: 'XXXXXXXXXXXXXXXX',
    marca: 'XXXXXXXXXXXXXXXX',
    sucursal: 'XXXXXXXXXXXXXXX',
    costo: '$$$$$$$$$$$$$$$$'
  },
];

/*
 * This function specifies how strings like /app/:users/:items* are
 * transformed into regular expressions.
 *
 * Note that it is just a wrapper around `pathToRegexp`, which uses a
 * slighly different convetion of returning the array of keys.
 *
 * @param {string} path — a path like "/:foo/:bar"
 * @return {{ keys: [], regexp: RegExp }}
 */
const convertPathToRegexp = (path) => {
  let keys = [];

  // we use original pathToRegexp package here with keys
  const regexp = pathToRegexp(path, keys);
  return { keys, regexp };
};

// signature of the matcher fn: (pattern, path) => [success, params]
const customMatcher = makeCachedMatcher(convertPathToRegexp);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router matcher={customMatcher}>
      <div className="App">
        <Switch>
          <Route path="/">

            <AdminActionBoxB objetosBD={puestos}></AdminActionBoxB>

          </Route>
          <Route path="/gestion/:tramite"><ListRender /></Route>
          <Route path="/configuracion/:tramite">Configuracion</Route>
          <Route path="/planilla/">Planilla</Route>

          <Route path="/(for-sale|sold-items)/:item">
            {(params) => (
              <article>
                <h1>{params.item.toUpperCase()}: Product Info</h1>
                <p>
                  Injection stdio.h wannabee hexadecimal packet mainframe script
                  kiddies thread new gnu win emacs for fopen if cat Leslie
                  Lamport. Big-endian over clock hello world Starcraft firewall
                  machine code d00dz alloc perl. Flush class deadlock man pages
                  tera unix frack semaphore long server rsa suitably small
                  values.
                </p>
                </article>
            )}
            </Route>

          <Route path="/(for-sale|sold-items)/:item">
            {(params) => (
              <article>
                <h1>{params.item.toUpperCase()}: Product Info</h1>
                <p>
                  Injection stdio.h wannabee hexadecimal packet mainframe
                  script kiddies thread new gnu win emacs for fopen if cat
                  Leslie Lamport. Big-endian over clock hello world Starcraft
                  firewall machine code d00dz alloc perl. Flush class deadlock
                  man pages tera unix frack semaphore long server rsa suitably
                  small values.
                </p>

                <p>
                  Mega wabbit firewall frack fork grep gobble false stdio.h
                  mainframe fail endif less Starcraft tera gcc blob back door
                  void float lib ack. Alloc try catch bypass null new access
                  int double wannabee stack mutex fatal dereference nak bit vi
                  crack semaphore. Bin continue gnu bytes case salt packet
                  sniffer char private bin infinite loop foad.
                </p>
              </article>
            )}
          </Route>
          <Route path="/:anything*">
            <center>
              <b>404:</b> Sorry, this page isn't ready yet!
            </center>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
