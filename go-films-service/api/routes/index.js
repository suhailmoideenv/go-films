var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlFilms = require('../controllers/films');
var ctrlAuth = require('../controllers/authentication');

// films
router.post('/save', ctrlFilms.filmsSave);
router.post('/get', ctrlFilms.filmsGet);
router.post('/get/details', ctrlFilms.getFilmDetails);
router.post('/update/comments', auth, ctrlFilms.updateComments);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
