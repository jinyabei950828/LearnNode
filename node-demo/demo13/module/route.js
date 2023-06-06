const url = require("url")

function changeRes(res){
  res.send = (data)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset="UTF-8"'});
    res.end(data);
  }
}

let server = ()=>{
  //把get和post分开
  let G = {}
  //把get和post分开
  G._get = {}
  G._post = {}

  let app = function(req,res){
    //扩展res的方法
    changeRes(res)

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

  return app
}

module.exports = server()