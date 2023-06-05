// wwwroot文件下面有images、css、js以及index.html,找出wwwroot目录下面的所有的文件及文件夹

const fs = require("fs")

//错误写法，注意:fs里面的方法是异步的
var path = './wwwroot'
//获取所有目录
var dirArr = []

fs.readdir(path,(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
  (function getDir(i){
    if(i==data.length){
      console.log(dirArr)
      return;
    }
    fs.stat(`${path}/${data[i]}`,(err,stats)=>{
      if(stats.isDirectory()){
        dirArr.push(data[i])
      }
      getDir(i+1)
    })    
  })(0)
})