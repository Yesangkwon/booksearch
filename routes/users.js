var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* 회원가입 */
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'pages/users/join.ejs', email: null });
});

module.exports = router;