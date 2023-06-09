const express = require("express")
//加载模块
const tools = require("../../module/tools")


const router = express.Router()

router.get("/",(req,res)=>{
  res.send("导航列表")
})

router.get("/add",(req,res)=>{
  res.render("admin/nav/add.html")
  // res.send("增加导航")
})

router.get("/edit",(req,res)=>{
  res.send("修改导航")
})

router.post("/doAdd",tools.multer().single('pic'),(req,res)=>{
  const body = req.body
  console.log(body)
  res.send({
    body:req.body,
    file:req.file
  })
})

router.post("/doEdit",(req,res)=>{
  res.send("执行修改")
})

module.exports = router