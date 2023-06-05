// wwwroot文件下面有images、css、js以及index.html,找出wwwroot目录下面的所有的文件及文件夹

const fs = require("fs")

//错误写法，注意:fs里面的方法是异步的
var path = './wwwroot'
//获取所有目录
var dirArr = []

async function isDir(path){
  return new Promise((resolve,reject)=>{
    fs.stat(path,(err,stats)=>{
      if(err){
        console.log(err)
        reject(err)
        return;
      }
      if(stats.isDirectory()){
        resolve(true)
      }else{
        resolve(false)
      }
    })
  })
}

function main(){
  fs.readdir(path,async (err,data)=>{
    if(err){
      console.log(err);
      return;
    }
    for(let i=0;i<data.length;i++){
      if(await isDir(`${path}/${data[i]}`)){
        dirArr.push(data[i])
      }
    }
    console.log(dirArr)
  })
}

main()
