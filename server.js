/* eslint-disable no-console */
/* eslint no-unused-vars: "error" */

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Wordl');
});

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`);
});
