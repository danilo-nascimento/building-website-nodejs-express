const express = require('express');

const router = express.Router();

module.exports = (params) => {
  router.get('/', async (req, res) => {
    const { feedbackService } = params;
    const feedback = await feedbackService.getList();
    res.json(feedback);
  });

  router.post('/', (req, res) => res.send('POST Feedback'));

  return router;
};
