const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
  res.send("api接口")
})

module.exports = router