const express = require("express")

const router = express.Router()

const user = require("./admin/user")
const login = require("./admin/login")
const nav = require("./admin/nav")

router.get("/",(req,res)=>{
  res.send("后台管理中心")
})

router.use('/user',user)
router.use('/login',login)
router.use('/nav',nav)

module.exports = router