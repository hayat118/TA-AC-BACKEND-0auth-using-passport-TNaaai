var express = require('express');
var router = express.Router();
var passport=require('passport');

var User=require('../models/user');

var auth=require('../middleware/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user)
  res.render('index', { title: 'Express', user: req.user });
});

// success
router.get('/success',(req,res)=>{
  res.render('success')
})
router.get('/failure',(req,res)=>{
  res.render('failure')
})

// 
router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github',
{failureRedirect:'/failure'}),(req,res)=>{
  res.redirect('/articles')
})

module.exports = router;
