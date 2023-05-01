import { useState } from 'react'
import axios from 'axios'
import { Route } from 'wouter'

<<<<<<< Updated upstream
import ObjectList from './components/ObjectList'
import DropdownButton from './components/DropdownButton'
import NavigationBar from './components/NavigationBar'

const objetos = [
  'Botón 1',
  'Botón 2',
  'Botón 3',
  'Botón 4',
  'Botón 5',
  'Botón 6',
  'Botón 7',
  'Botón 8',
  'Botón 9',
  'Botón 10',
  'Botón 11',
  'Botón 12',
];

function App() {
  const [count, setCount] = useState(0)


  // Plantilla GET
  axios.get('http://url')
    .then(function (response) {

      console.log(response.data);

    })
    .catch(function (error) {
      if (error.response) { // GET response with a status code not in range 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) { // no response
        console.log(error.request);
        // instance of XMLHttpRequest in the browser
        // instance ofhttp.ClientRequest in node.js
      } else { // Something wrong in setting up the request
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  // Plantilla POST
  axios.post(
    'http://url',
    {
      //Body
      title: "Title",
      description: "Description",
    },
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
  ).then(function (response) {

    console.log(response.data);

  }).catch(function (error) {
    if (error.response) { // POST response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log(error.request);
      // instance of XMLHttpRequest in the browser
      // instance ofhttp.ClientRequest in node.js
    } else { // Something wrong in setting up the request
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  // Plantilla PUT
  axios.put(
    'http://url',
    {
      //Body
      title: "title",
      description: "Description",
      published: true,
    },
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
  ).then(function (response) {

    console.log(response.data);

  }).catch(function (error) {
    if (error.response) { // PUT response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log(error.request);
      // instance of XMLHttpRequest in the browser
      // instance ofhttp.ClientRequest in node.js
    } else { // Something wrong in setting up the request
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  return (
    <div className="container mt-3">
      <ObjectList objetos={objetos} />
      <DropdownButton></DropdownButton>
      <NavigationBar></NavigationBar>
    </div>
=======
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
            <Route path="/">Welcome!</Route>
            <Route path="/gestion/:tramite">Gestion</Route>
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
>>>>>>> Stashed changes
  )
}

export default App
