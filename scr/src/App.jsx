import { useState } from 'react'
import axios from 'axios'
import { Route } from 'wouter'

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
  )
}

export default App
