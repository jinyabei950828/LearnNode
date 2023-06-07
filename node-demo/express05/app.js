const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app = express()

//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")

//内置中间件
app.use(express.static("static"))

//配置第三方中间件
app.use(bodyParser.urlencoded({extended:false}))//方便get取值
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.send("首页")
})

app.get("/login",(req,res)=>{
  res.render("login",{})
})

app.post("/doLogin",(req,res)=>{
  const body = req.body
  console.log(body)
  res.send("执行提交")
})
app.listen(3000)