const mongoose = require("mongoose")

mongoose.connect('mongodb://eggadmin:123456@127.0.0.1:27017/eggcms').then((err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("连接成功")
})

module.exports = mongoose