const express = require("express")
const multer = require("multer")
const path = require("path")

//上传资源的目录(上传之前目录必须存在)
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'static/upload')
  },
  filename:function(req,file,cb){
    const extname = path.extname(file.originalname)
    cb(null,file.fieldname+"-"+Date.now()+extname)
  }
})

const upload = multer({storage:storage})


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

router.post("/doAdd",upload.single('pic'),(req,res)=>{
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