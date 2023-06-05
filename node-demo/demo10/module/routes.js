const fs = require("fs")
const path = require('path')
const url = require("url")

//私有化方法
let getFileMime = function(extname){
  //同步方法
  var data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}

exports.static = function(req,res,staticPath){
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