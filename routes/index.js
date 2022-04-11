var express = require('express');
var router = express.Router();

const fns = require('date-fns');
const formatDate = (date) => {
  return fns.formatDistance(
    date,
    new Date(),
    { addSuffix: true }
  );
};

const messages = [
  {
    text: "Do a barrel roll!",
    user: "Star Fox",
    added: new Date('March 02, 2022 03:24:00'),
  },
  {
    text: "No gods or kings. Only man.",
    user: "Andrew Ryan",
    added: new Date('December 17, 2021 03:24:00'),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages, formatDate: formatDate });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message', messages: messages });
});

/* POST new message on form submit. */
router.post('/new', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;
  messages.unshift({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
