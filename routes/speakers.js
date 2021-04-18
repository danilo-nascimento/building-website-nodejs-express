const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('Speakers'));

  router.get('/:shortname', (req, res) => res.send(`Speaker ${req.params.shortname}`));

  return router;
};
