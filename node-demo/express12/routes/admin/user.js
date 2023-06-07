const express = require("express")
const tools = require("../../module/tools")

const router = express.Router()

router.get("/",(req,res)=>{
  res.send("用户列表")
})

router.get("/add",(req,res)=>{
  res.render("admin/user/add")
})

router.get("/edit",(req,res)=>{
  res.send("修改用户")
})

var cpUpload = tools.multer().fields([{name:'pic1',maxCount:1},{name:'pic2',maxCount:2}])
router.post("/doAdd",cpUpload,(req,res)=>{
  res.send({
    body:req.body,
    file:req.files
  })
})

router.get("/doEdit",(req,res)=>{
  res.send("执行修改")
})

module.exports = router