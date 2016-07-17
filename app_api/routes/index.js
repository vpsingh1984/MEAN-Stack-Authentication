var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');		//profile page
var ctrlAuth = require('../controllers/authentication');	//Authentication 
var addArticleCtrl = require('../controllers/addArticle');		//Adding post 
var getAllArticleCtrl = require('../controllers/getAllArticles');	//Fetching all posts

// profile
router.get('/profile', auth, ctrlProfile.profileRead);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/articles', addArticleCtrl.addArticle);
router.get('/articles', getAllArticleCtrl.getAllArticles);












module.exports = router;
