const express = require ('express');
const app = express(); //oq significa o nome require?
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log("aplicação iniciada, usando a porta" + port)
})