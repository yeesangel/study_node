var express = require('express');
var router = express.Router();

/* GET home page. */

var comment = {}

function html_encode(str) {
  var s = ''
  if(str.length === 0) return ""

  s = str.replace(/&/g, "&gt;")
  s = str.replace(/</g, "&lt;")
  s = str.replace(/>/g, "&gt;")
  s = str.replace(/\s/g, "&nbsp;")
  s = str.replace(/\'/g, "&#39;")
  s = str.replace(/\"/g, "&qout;")
  s = str.replace(/\n/g, "<br>")
  return s
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comment', function (req, res, next) {
  comment.v = html_encode(req.query.comment)
  res.send({msg:'评论成功', state: 1000})
})

router.get('/getComment', function (req, res, next) {
  res.send({
    comment: comment.v
  })
})

module.exports = router;
