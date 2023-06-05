//判断服务器上面有没有upload目录，如果没有，创建这个目录，如果有的话，不做任何操作
const fs = require("fs")
const path = './upload'

fs.stat(path,(err,data)=>{
  if(err){
    //创建目录
    mkdir(path)
    return;
  }
  if(data.isDirectory()){
    console.log('upload目录存在')
  }else{
    //删除文件,再去创建
    fs.unlink(path,(err)=>{
      if(!err){
        mkdir(path)
      }else{
        console.log("请检查传入的数据是否正确")
      }
    })
  }
})

function mkdir(dir){
  fs.mkdir(dir,(err)=>{
    if(err){
      console.log(err)
      return;
    }
  })
}