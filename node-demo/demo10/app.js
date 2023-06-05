const  http = require('http');
const url = require("url")
const routes = require('./module/routes')

http.createServer(function (req, res) {
  routes.static(req,res,'static')

  let pathname = url.parse(req.url).pathname

  if(pathname=='/login'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行登录");
  }else if(pathname=='/register'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("执行注册");
  }else if(pathname=='/admin'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end("处理后的业务逻辑");
  }else{
    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end()
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');