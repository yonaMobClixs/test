var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/', function(req, res, next) {
//   res.render('login');
// })
router.get('/', function(req, res, next) {
  res.render('login');
})
router.get('/home', function(req, res, next) {
  res.render('home');
})

router.get('/header', function(req, res, next) {
  res.render('header');
})
module.exports = router;
