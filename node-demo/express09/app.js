const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app = express()

//引入外部模块
const admin = require("./routes/admin")
const api = require("./routes/api")
const index = require("./routes/index")

//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")

//内置中间件
app.use(express.static("static"))

//配置第三方中间件
app.use(bodyParser.urlencoded({extended:false}))//方便get取值
app.use(bodyParser.json())

app.use("/admin",admin)
app.use("/api",api)
app.use("/index",index)

app.get("/",(req,res)=>{
  res.send("首页")
})

app.listen(3000)