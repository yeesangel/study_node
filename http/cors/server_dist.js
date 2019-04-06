let express = require('express');
let path = require('path')

let app = express();
app.use(express.static('./dist'));
app.use('get', function(req, res) {
  console.log(res)
})
app.listen(3000); 