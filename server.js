/* eslint-disable no-console */
/* eslint no-unused-vars: "error" */

const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');

const routes = require('./routes');

const FeedbackService = require('./services/FeedbackService');

const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = express();
const port = 3000;

app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'session',
  keys: [
    'foo', 'bar',
  ],
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/**
 * @link https://expressjs.com/pt-br/api.html#express.static
 */

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes({
  feedbackService,
  speakerService,
}));

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`);
});
