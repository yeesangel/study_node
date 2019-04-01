const express = require('express');
const app = express();



// app.use('/say', function(req, res) {
//   let {wd, callback} = req.query;
//   console.log(req.query)
//   res.send(`${callback}('我爱你')`)
// })

app.get('/say', function(req, res) {
  let {wd, callback} = req.query;
  console.log(req.query)
  res.send(`${callback}('我爱你')`)
})

app.listen(3000)