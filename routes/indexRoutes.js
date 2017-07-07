var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var username = "blah";
var password = "blah";

var data = [{
  id: 1,
  firstname: "Jacob",
  lastname: "D",
  age: 7,
  nickname: "Cobra"
}, {
  id: 2,
  firstname: "Dacob",
  lastname: "J",
  age: 77,
  nickname: "DirtNap"
}, {
  id: 3,
  firstname: "Bacon",
  lastname: "Jesus",
  age: 102,
  nickname: "Old Man Willy"
}, {
  id: 4,
  firstname: "Biko",
  lastname: "Tiko",
  age: 17,
  nickname: "Pirahna Chihuahua"
}, {
  id: 5,
  firstname: "Slippy",
  lastname: "Fist",
  age: 30,
  nickname: "John Smith"
}, {
  id: 6,
  firstname: "Stanley",
  lastname: "Mansfield",
  age: 55,
  nickname: "Stanley Steamer"
}];


function checkAuth(req, res, next) {
  if (req.cookies.authed) {
    next();
  } else {
    res.redirect('/')
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res) {
  if (req.body.username === username && req.body.password === password) {
    res.cookie('authed', true);
    res.cookie('booyeah', 'something');
    res.redirect('/admin');
  }
});

router.get('/admin', checkAuth, function(req, res) {
  res.render('admin', {
    data: data
  });
});


module.exports = router;
