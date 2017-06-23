var express = require('express');
var router = express.Router();

var mang = ["Android", "iOS", "PHP", "React"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demo ReactJS' });
});

router.post('/getNotes', function(req, res, next){  
  res.send(mang);
});

router.post('/add', function(req, res){ 
  mang.push(req.body.note);
  res.send(mang);
});

router.post('/update', function(req, res){
  var id = req.body.idSua;
  mang[id] = req.body.noiDung;
  res.send(mang);
});

router.post('/delete', function(req, res){
  var id = req.body.idXoa;
  console.log(id);
  mang.splice(id, 1);
  res.send(mang);
});
module.exports = router;