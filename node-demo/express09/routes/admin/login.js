const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
  res.render("login",{})
})

router.post("/doLogin",(req,res)=>{
  const body = req.body
  console.log(body)
  res.send("执行提交")
})

module.exports = router