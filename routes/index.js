const express = require('express');

const feedbackRouter = require('./feedback');

const speakersRouter = require('./speakers');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/feedback', feedbackRouter());
  router.use('/speakers', speakersRouter());

  return router;
};
