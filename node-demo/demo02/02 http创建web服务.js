//引入http模块
var http = require('http');

//创建服务
// request:获取url传递的信息
// response:给浏览器的响应信息
http.createServer(function (request, response) {
  //设置响应头
  response.writeHead(200, {'Content-Type': 'text/html,charset=utf-8'});
  //解决乱码问题
  response.write("<head><meta charset='utf-8'/></head>")
  //给上面输出一句话并且结束响应
  response.end('Hello World,你好啊');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');