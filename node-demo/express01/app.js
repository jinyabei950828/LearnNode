const express = require("express")

const app = express()

app.get("/",(req,res)=>{
  res.send("你好,express")
})

app.get("/ariticle",(req,res)=>{
  res.send("新闻页面")
})

app.get("/login",(req,res)=>{
  res.send("登录")
})

app.get("/register",(req,res)=>{
  res.send("注册页面")
})

app.post("/doLogin",(req,res)=>{
  console.log("执行请求")
  res.send("执行登录")
})


app.put("/editUser",(req,res)=>{
  console.log("修改用户")
  res.send("修改用户")
})

app.delete("/delUser",(req,res)=>{
  console.log("执行删除")
  res.send("执行删除")
})


//配置多级路由
app.get("/admin/user/add",(req,res)=>{
  res.send("admin user add")
})

app.get("/admin/user/edit",(req,res)=>{
  res.send("admin user edit")
})

//动态路由,注意配置路由的顺序
app.get("/ariticle/:id",(req,res)=>{
  let id = req.params['id']
  res.send("动态路由:"+id)
})

//get 传值
app.get("/product",(req,res)=>{
  let query = req.query
  res.send("get传值:"+query.id)
})

app.listen(3000)