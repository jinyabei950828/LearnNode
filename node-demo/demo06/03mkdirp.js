// 使用第三方模块 mkdirp

const {mkdirp} = require("mkdirp")

mkdirp("./upload/aaa/xxx").then(made=>{
  //创建的路径
  console.log(made)
})