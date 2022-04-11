var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New message', messages: messages });
});

/* POST new message on form submit. */
router.post('/new', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
