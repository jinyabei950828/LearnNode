const  http = require('http');
const fs = require('fs')
const common = require('./module/common')
const path = require('path')
const url = require("url")

common.getFileMime(".js")
http.createServer(function (req, res) {
  let pathname = url.parse(req.url).pathname
  pathname = pathname=='/'?'/index.html':pathname
  //获取后缀名
  let extname = path.extname(pathname)

  if(pathname!='/favicon.ico'){
    fs.readFile(`./static${pathname}`,(err,data)=>{
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
        return;
      }
      let mime = common.getFileMime(extname)
      res.writeHead(200, {'Content-Type': `${mime};charset="utf-8"`});
      res.end(data);
    })
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');