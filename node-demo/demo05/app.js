const fs = require("fs")

// fs.stat 检测时文件还是目录
fs.stat('./html',(err,data)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log(`是文件${data.isFile()}`) //false
  console.log(`是目录${data.isDirectory()}`) //true
})

fs.stat('./package.json',(err,data)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log(`是文件${data.isFile()}`) //true
  console.log(`是目录${data.isDirectory()}`) //false
})

/***
 * fs.mkdir() 创建目录
 * path:创建的目录路径
 * mode:目录权限(读写权限)默认:777
 * callback:回调,传递参数异常err
 */
fs.mkdir('./css',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("创建成功")
})

/**
 * fs.writeFile
 * filename:文件名称
 * data:将写入的内容，可以是字符串或者buffer数据
 * options:{
 *  encoding: 可选对象
 *  mode:文件的读写权限
 *  flag:默认值 'w'
 * }
 * callback:回调，传递一个异常参数err
 */
fs.writeFile('./html/index.html','你好nodejs 哈哈哈',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("创建写入文件成功")
})

/**
 * fs.appendFile 追加文件
 */
fs.appendFile('./css/base.css','h2{color:red}',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log('appendFile 成功')
})

/**
 * fs.readFile 读取文件
 */

fs.readFile('./html/index.html',(err,data)=>{
  if(err){
    console.log(err)
    return;
  }
  //把buffer转换成string
  console.log(data.toString())
})

/**
 * fs.readdir 读取目录
 */

fs.readdir('./html',(err,data)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log(data)
})

/**
 * fs.rename:重命名 功能:1.重命名 2.移动文件
 */
fs.rename('./css/aaa.css','./css/index.css',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log('重命名成功')
})

fs.rename('./css/index.css','./html/index.css',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log('移动成功')
})

/**
 * fs.rmdir 删除目录
 */
fs.rmdir('./aaa',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("删除目录成功")
})

/**
 * fs.unlink 删除文件
 */

fs.unlink('./aaa/news.html',(err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("删除文件成功")
})

