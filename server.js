/* eslint-disable no-console */
/* eslint no-unused-vars: "error" */

const express = require('express');

const path = require('path');

const routes = require('./routes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/**
 * @link https://expressjs.com/pt-br/api.html#express.static
 */

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`);
});
