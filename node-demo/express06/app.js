const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(cookieParser("itying"))

app.get("/",(req,res)=>{
  //设置cookie(指定路径、多域名共享)
  res.cookie("username","zhangsan",{
    maxAge:1000*60*60,
    // path:"/ariticle",
    //domain:'.itying.com',
    signed:true
  })
  res.send("你好,express")
})

app.get("/ariticle",(req,res)=>{
  const username = req.cookies.username
  console.log(username)
  res.send("新闻页面")
})

app.get("/user",(req,res)=>{
  const username = req.cookies.username
  console.log(username)
  res.send("用户")
})

app.get("/product",(req,res)=>{
  //获取加密cookir
  const username = req.signedCookies.username
  console.log(username)
  res.send("用户")
})

app.listen(3000)