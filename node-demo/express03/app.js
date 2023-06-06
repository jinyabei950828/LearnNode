const express = require("express")
const ejs = require("ejs")

const app = express()

//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")

//配置静态目录
app.use(express.static("static"))

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