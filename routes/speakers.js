const express = require('express');

const router = express.Router();

module.exports = (params) => {
  router.get('/', async (req, res) => {
    const { speakerService } = params;
    const speakers = await speakerService.getList();
    res.json(speakers);
  });

  router.get('/:shortname', (req, res) => res.send(`Speaker ${req.params.shortname}`));

  return router;
};
