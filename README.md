# Building a website with Node.js and Express

This repository contains the code for my course 'Building a Website with Node.js Node.js' on [LinkedIn Learning](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3).

The master branch contains the initial version to get started with, while the branches contain the state of the code at the beginning (e.g. 02_02**b**) and end (e.g. 02_02**e**) of a video.

## Setting up the project

* In your terminal, create directory `building-website-nodejs-express` and **change into it**.
* Run 
  ```bash
  git clone --bare git@github.com:danielkhan/building-website-nodejs-express.git .git
  git config --bool core.bare false
  git reset --hard
  git branch
  ```
  
Everything else will be discussed in my course.

## Uso básico

```js
const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`);
});
```