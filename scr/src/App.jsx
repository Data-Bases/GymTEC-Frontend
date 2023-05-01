import { useState } from 'react'
import ListRender from './listRender'

import { pathToRegexp } from "path-to-regexp";
import { Router, Switch, Route, Link, useRoute } from "wouter";
import makeCachedMatcher from "wouter/matcher";


import ObjectList from './components/ObjectList'
import DropdownButton from './components/DropdownButton'
import NavigationBar from './components/NavigationBar'

const botones = ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4', 'Botón 5', 'Botón 6', 'Botón 7', 'Botón 8', 'Botón 9', 'Botón 10', 'Botón 11', 'Botón 12'];

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
    // <Router matcher={customMatcher}>
    //   <div className="App">
    //       <Switch>
    //         <Route path="/">Welcome!</Route>
    //         <Route path="/gestion/:tramite"><ListRender/></Route>
    //         <Route path="/configuracion/:tramite">Configuracion</Route>
    //         <Route path="/planilla/">Planilla</Route>


    //         <Route path="/(for-sale|sold-items)/:item">
    //           {(params) => (
    //             <article>
    //               <h1>{params.item.toUpperCase()}: Product Info</h1>
    //               <p>
    //                 Injection stdio.h wannabee hexadecimal packet mainframe
    //                 script kiddies thread new gnu win emacs for fopen if cat
    //                 Leslie Lamport. Big-endian over clock hello world Starcraft
    //                 firewall machine code d00dz alloc perl. Flush class deadlock
    //                 man pages tera unix frack semaphore long server rsa suitably
    //                 small values.
    //               </p>

    //               <p>
    //                 Mega wabbit firewall frack fork grep gobble false stdio.h
    //                 mainframe fail endif less Starcraft tera gcc blob back door
    //                 void float lib ack. Alloc try catch bypass null new access
    //                 int double wannabee stack mutex fatal dereference nak bit vi
    //                 crack semaphore. Bin continue gnu bytes case salt packet
    //                 sniffer char private bin infinite loop foad.
    //               </p>
    //             </article>
    //           )}
    //         </Route>
    //         <Route path="/:anything*">
    //           <center>
    //             <b>404:</b> Sorry, this page isn't ready yet!
    //           </center>
    //         </Route>
    //       </Switch>
    //       </div>
    // </Router>
    <>
    <ObjectList objetos={botones}></ObjectList>
    <NavigationBar></NavigationBar>
    </>
  )
}

export default App
