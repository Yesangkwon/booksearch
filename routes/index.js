var express = require('express');
var router = express.Router();

/* GET home page. 
localhost:5000 엔터로 요청을 하면 인터셉트 해서 home.ejs요청된다.
세션에 이메일 정보가 있다면 로그인을 한 사람이다. -> pages/home.ejs
이메일 정보가 없다면 로그인 화면으로 이동하기 -> auth/login.ejs
*/
router.get('/', function(req, res, next) {
  //아래는 세션에 저장된 이메일 정보를 출력하기 이다.
  console.log(req.session.email);
  if(req.session.email){
    res.render('index', { title: 'Home', pageName: 'pages/home.ejs', email:req.session.email });
  }else{
    res.render('index', { title: 'Home', pageName: 'auth/login.ejs', email: null });
  }
});
// 로그인 화면 추가
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs', email: null });
});
module.exports = router;