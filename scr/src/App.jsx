import { useState } from "react";
import ListRender from "./listRender";

import { pathToRegexp } from "path-to-regexp";
import { Router, Switch, Route, Link, useRoute } from "wouter";
import makeCachedMatcher from "wouter/matcher";

import AdminActionBoxA from "./components/AdminActionBoxA";
import AdminActionBoxB from "./components/AdminActionBoxB";
import AdminActionBoxC from "./components/AdminActionBoxC";
import AdminActionBoxD from "./components/AdminActionBoxD";
import AdminActionBoxE from "./components/AdminActionBoxE";
import Welcome from "./components/Welcome";

import { puestos, empleados, inventario } from "./components/testValues";
import TwoListActionBox from "./components/TwoListActionBox";
import Login from "./components/Login";
import Gestion from "./components/Gestion";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Configuracion from "./components/Configuracion";
import SignUp from "./components/SignUp";
import Planilla from "./components/Planilla";

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
      <div className="App w-100 h-100">
        <Switch>
          <Route path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/gestion/:tramite">
            {(params) => (
              <>
                <Gestion tramite={params.tramite} />
                <NavigationBar />
              </>
            )}
          </Route>
          <Route path="/configuracion/:tramite">
          {(params) => (
              <>
                <Configuracion tramite={params.tramite} />
                <NavigationBar />
              </>
            )}
          </Route>
          <Route path="/cliente/:id">
            {(params) => (
                <Cliente tramite={params.tramite} />
            )}
          </Route>
          <Route path="/planilla/" component={Planilla}></Route>
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
