const url = require("url")
const fs = require("fs")
const path = require('path')

function changeRes(res){
  res.send = (data)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
    res.end(data);
  }
}

//获取后缀名的方法
function getFileMime(extname){
  var data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}

//静态web服务的方法
function initStatic(req,res,staticPath){
  let pathname = url.parse(req.url).pathname
  pathname = pathname=='/'?'/index.html':pathname
  //获取后缀名
  let extname = path.extname(pathname)

  if(pathname!='/favicon.ico'){
    try{
      let data = fs.readFileSync(`./${staticPath}${pathname}`)
      if(data){
        let mime = getFileMime(extname)
        res.writeHead(200, {'Content-Type': `${mime};charset="utf-8"`});
        res.end(data)
      }
    }catch(error){
      
    }
  }
}

let server = ()=>{
  //把get和post分开
  let G = {
    _get:{},
    _post:{},
    staticPath:'static' //静态外部服务目录
  }

  let app = function(req,res){
    //扩展res的方法
    changeRes(res)
    //配置静态web服务
    initStatic(req,res,G.staticPath)

    let pathname = url.parse(req.url).pathname
    //获取请求类型
    let method = req.method.toLowerCase()

    //执行方法
    if(G[`_${method}`][pathname]){
      if(method=='get'){
        G._get[pathname](req,res)
      }else if(method=='post'){
        let postData = ''
        req.on("data",(chunk)=>{
          postData+=chunk
        })
        req.on("end",()=>{
          req.body = postData
          G._post[pathname](req,res)
        })
      }
    }else{
      res.writeHead(404,{'Content-Type': 'text/html;charset="UTF-8"'})
      res.end("页面不存在")
    }
  }

  app.get = function(str,cb){
    //注册方法
    G._get[str] = cb
  }

  app.post = function(str,cb){
    //注册方法
    G._post[str] = cb
  }

  //配置静态web服务目录
  app.static = function(staticPath){
    G.staticPath = staticPath
  }

  return app
}

module.exports = server()