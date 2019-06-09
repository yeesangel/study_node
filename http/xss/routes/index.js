var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // xss 攻击的脚本存储在 url search 中
  // "http://localhost:3000/?xss=<img src="null" onerror="alert(11)" />"
  // http://localhost:3000/?xss=<p onclick="alert('点击我')">点击我</p>
  res.set("X-XSS-Protection", 0) // 设置浏览器不对 Xss 攻击 拦截
  res.render('index', { title: 'Express', xss: req.query.xss});
});

module.exports = router;
