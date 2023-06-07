const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)

const app = express()

//配置session中间件
app.use(session({
  secret:"keyboard cat", //用于服务端生成session签名
  name:"itying",//修改session对应的cookie的名称
  resave:false,//强制保存,session并没有变化
  saveUninitialized:true,//强制将未初始化的session存储
  cookie:{
    maxAge:1000*60,
    secure:false //true 只有http协议才能访问cookie
  },
  rolling:true, //每次请求,重新设置cookie的过期时间
  store:new MongoStore({
    url:"mongodb://user12345:foobar@localhost/test/app?authSource=admins&w=1",
    touchAfter:24*3600 //24小时只更新一次session,除非你改变这个session
  })
}))

app.get("/",(req,res)=>{
  //获取
  if(req.session.username){
    res.send(req.session.username+"-已登录")
  }else{
    res.send("没有登录")
  }
})

app.get("/login",(req,res)=>{
  req.session.username="张三"
  res.send("登录")
})

app.get("/logOut",(req,res)=>{
  //销毁session
  // req.session.cookie.maxAge=0
  //req.session.username = ''
  req.session.destroy()
  res.send("执行退出")
})

app.listen(3000)