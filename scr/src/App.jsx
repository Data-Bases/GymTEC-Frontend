import { useState } from 'react'
import ListRender from './listRender'

import { pathToRegexp } from "path-to-regexp";
import { Router, Switch, Route, Link, useRoute } from "wouter";
import makeCachedMatcher from "wouter/matcher";


import ObjectList from './components/ObjectList'
import TwoObjectList from './components/TwoObjectList'
import DropdownButton from './components/DropdownButton'
import NavigationBar from './components/NavigationBar';
// import NavigationBar from './components/NavigationBar'

const valores1 = [
  {
    nombre: 'Tratamiento 1',
    identificador: 1001
  },
  {
    nombre: 'Tratamiento 2',
    identificador: 1002
  },
  {
    nombre: 'Tratamiento 3',
    identificador: 1003
  },
  {
    nombre: 'Tratamiento 4',
    identificador: 1004
  },
  {
    nombre: 'Tratamiento 5',
    identificador: 1005
  },
  {
    nombre: 'Tratamiento 6',
    identificador: 1006
  },
  {
    nombre: 'Tratamiento 7',
    identificador: 1007
  },
  {
    nombre: 'Tratamiento 8',
    identificador: 1008
  },
  {
    nombre: 'Tratamiento 9',
    identificador: 1009
  },
  {
    nombre: 'Tratamiento 10',
    identificador: 10010
  },
  {
    nombre: 'Tratamiento 11',
    identificador: 10011
  },
  {
    nombre: 'Tratamiento 12',
    identificador: 10012
  },
];


const valores2 = [
  {
    nombre: 'Tratamiento 13',
    identificador: 10013
  },
  {
    nombre: 'Tratamiento 14',
    identificador: 10014
  },
  {
    nombre: 'Tratamiento 15',
    identificador: 10015
  },
  {
    nombre: 'Tratamiento 16',
    identificador: 10016
  },
  {
    nombre: 'Tratamiento 17',
    identificador: 10017
  },
  {
    nombre: 'Tratamiento 18',
    identificador: 10018
  },
  {
    nombre: 'Tratamiento 19',
    identificador: 10019
  },
  {
    nombre: 'Tratamiento 20',
    identificador: 10020
  },
  {
    nombre: 'Tratamiento 21',
    identificador: 10021
  },
  {
    nombre: 'Tratamiento 22',
    identificador: 10022
  },
  {
    nombre: 'Tratamiento 23',
    identificador: 10023
  },
  {
    nombre: 'Tratamiento 24',
    identificador: 10024
  }
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
  const [count, setCount] = useState(0)

  return (
    <Router matcher={customMatcher}>
      <div className="App">
        <Switch>
          <Route path="/">

            <ObjectList objetos={valores1}></ObjectList>
            <TwoObjectList objetos1={valores1} objetos2={valores2} ></TwoObjectList>

          </Route>
          <Route path="/gestion/:tramite"><ListRender /></Route>
          <Route path="/configuracion/:tramite">Configuracion</Route>
          <Route path="/planilla/">Planilla</Route>


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

export default App
