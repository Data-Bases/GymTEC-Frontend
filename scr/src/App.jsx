import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.scss'
import axios from 'axios'
import { Route } from 'wouter'


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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
