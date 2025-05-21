var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var youtubeRouter = require('./routes/youtube');
//객체를 생성해서 메모리에 올려놓을게
//메모리에 상주하고 있어야 undefined가 발생하지 않는다.
//이른 객체 주입 vs 게으른 객체 주입
//이른 - 미리 new DeptVO () 해놓을게
//게으른 - 네가 호출(함수) 할 때
var app = express(); //req와 res 필요할 때 주입해줄게 내가 new XXX()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'secret',
  //secret: process.env.SECRET, // 비밀밀번호
  cookie: {
    maxAge: 1000*60*60, // 1 hour,
    secure: false, // HTTPS환경에서만 쿠키 전송하려면 true로 설정
    httpOnly: true, //클라이언트 자바스크립트에서 쿠키 접근 방지
  },
}))

//세션 삭제하기 -> 로그인 풀림
app.get('/delete', (req, res) =>{
  req.session.destroy()
  // -> http://localhost:5000/
  res.redirect('/') // 페이지 이동 발생
}) // end of session delete

//세션에 데이터 추가하기
app.get('/addSession', (req, res) => {
  req.session.addData = '추가할 값'
  res.redirect('/')
}) // end of session add

//세션 데이터 보기
app.get('lookSession', (req, res) => {
  res.send(req.session)
}) //end of 세션 정보 보기

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/youtube', youtubeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
