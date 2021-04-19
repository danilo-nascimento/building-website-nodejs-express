const express = require('express');

const feedbackRouter = require('./feedback');

const speakersRouter = require('./speakers');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/feedback', feedbackRouter(params));
  router.use('/speakers', speakersRouter(params));

  return router;
};
