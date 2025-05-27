const express = require('express')
const router = express.Router()

/* GET calendar listing */
router.get('/', function(req, res, next){
  res.send('calendar 라우터 추가')
})

/* 일정관리 1 */
router.get('/cstep1', function(req, res, next){
  res.render('index', { title: '일정관리 1', pageName: 'pages/calendar/cstep1.ejs', email:null})
})
/* 일정관리 2 */
router.get('/cstep1', function(req, res, next){
  res.render('index', { title: '일정관리 2', pageName: 'pages/calendar/cstep2.ejs', email:null})
})
/* 일정관리 3 */
router.get('/cstep1', function(req, res, next){
  res.render('index', { title: '일정관리 3', pageName: 'pages/calendar/cstep3.ejs', email:null})
})

module.exports = router;