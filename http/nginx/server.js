var http = require('http');
var server = http.createServer();
var qs = require('querystring');
server.on('request', function(req, res) {
	var params = qs.parse(req.url.substring(2));
	res.writeHead(200, {
		'Access-Control-Allow-Origin': 'http://test.zakzak.com', // 注意 设置此 header 只有前端 请求源（origin） 为 http//test.zakzak.com 才不会出现前端跨域问题
		'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'
	});
	res.write(JSON.stringify(params));
	res.end()
});
server.listen('8080');
console.log('Server is running at port 8080...');