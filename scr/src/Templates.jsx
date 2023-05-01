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