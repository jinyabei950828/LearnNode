//引入http模块
var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
  //设置响应头
  res.writeHead(200, {'Content-Type': 'text/html,charset=utf-8'});
  //解决乱码问题
  res.write("<head><meta charset='utf-8'/></head>")

  //获取浏览器的访问地址
  console.log(req.url)

  if(req.url!=='/favicon.ico'){
    var userinfo = url.parse(req.url,true).query
    console.log(`姓名:${userinfo.name}`)
    console.log(`年龄:${userinfo.age}`)
  }
  //给上面输出一句话并且结束响应
  res.end('Hello World,你好啊');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');