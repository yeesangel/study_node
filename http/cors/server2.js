// 跨域请求参考资料 https://mp.weixin.qq.com/s/dfM7BdU813FkHpZMbMKbfw

let express = require('express');
let app = express();
let whitList = ['http://localhost:3000', 'http://192.168.1.141:3000']; //设置白名单

app.use(function(req, res, next) {
	let origin = req.headers.origin
	if (whitList.includes(origin)) {

    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Max-Age', 6)
     // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
			return res.end()   // 允许返回的头
		}
	}
	next()
})
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.setHeader('name', 'jw')
  res.end('我不爱你')
})
app.get('/getData', function(req, res) {
  console.log(req.headers)
  return res.end('121248234234384573')
})
app.use(express.static(__dirname))
app.listen(4000)