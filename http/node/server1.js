const http = require('http');

// 第一步 接收客户端请求
const server = http.createServer((request, response) => {
   // 代理服务器， 直接和浏览器直接交互，需要设置OCRS 的首部字母
   response.writeHead(200, {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': '*',
     'Access-Control-Allow-Headers': 'Content-Type',
   })
   console.log(request.url, '=============================')
   //第二部， 将请求转发给服务器
   const proxyRequest = http.request({
     host: '127.0.0.1',
     port: 4000,
     url: '/ws',
     method: request.method,
     headers: request.headers,
   },
   serverResponse => {
    // 第三部： 收到服务器响应
    var body = ''
    serverResponse.on('data', chunk => {
      body += chunk
    })
    serverResponse.on('end', () => {
      console.log('The data is ', body)
      // 第四部： 将响应结果转发给浏览器
      response.end(body)
    })
   }).end()
})

server.listen(3000, () => {
  console.log('The proxyServer is runing at http://localhost:3000')
})