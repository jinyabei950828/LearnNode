const  http = require('http');
const url = require("url")
const routes = require('./module/routes')
const ejs = require('ejs');
const { ok } = require('assert');

http.createServer(function (req, res) {
  routes.static(req,res,'static')

  let pathname = url.parse(req.url).pathname

  console.log("获取请求类型",req.method)
  if(pathname=='/news'){
    //获取get传值
    var query = url.parse(req.url,true).query
    console.log(query)
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('get传值获取成功');
  }else if(pathname==='/ejs'){
    let msg='从数据库里面获取的数据'
    let list = [
      {
        title:'新闻111'
      },
      {
        title:'新闻222'
      },
      {
        title:'新闻333'
      }
    ]
    ejs.renderFile('./views/login.ejs',{
      msg:msg,
      list:list
    },(err,data)=>{
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    })
  }else if(pathname=='/login'){
    // post 演示
    ejs.renderFile('./views/form.ejs',{},(err,data)=>{
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    })
  }else if(pathname=='/doLogin'){
    //获取post传值
    var postData = ''

    req.on("data",(chunk)=>{
      postData+=chunk
    })
    req.on("end",()=>{
      console.log(postData)
      res.end(postData)
    })
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