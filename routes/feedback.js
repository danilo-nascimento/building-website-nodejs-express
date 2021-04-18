const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('GET Feedback'));

  router.post('/', (req, res) => res.send('POST Feedback'));

  return router;
};
