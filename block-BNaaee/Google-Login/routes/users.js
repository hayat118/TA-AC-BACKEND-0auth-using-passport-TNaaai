var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session, req.user)
  res.send('respond with a resource');
});

// log out
router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.clearCookie('connect-sid');
  res.redirect('/users/login')
})

module.exports = router;
