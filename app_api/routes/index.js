var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var addPostCtrl = require('../controllers/addPost');
var getAllPostCtrl = require('../controllers/getAllPost');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/posts', addPostCtrl.addPost);
router.get('/posts', getAllPostCtrl.getAllPost);












module.exports = router;
