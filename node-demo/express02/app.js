const express = require("express")

const app = express()

//配置模板引擎
app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render("index",{
    title:'你好,ejs'
  })
})

app.get("/news",(req,res)=>{
  res.render("news",{
    userinfo:{
      username:'张三',
      age:20
    },
    ariticle:"<h3>我是一个h3</h3>",
    flag:true,
    score:60,
    list:['1111','2222','3333']
  })
})

app.listen(3000)