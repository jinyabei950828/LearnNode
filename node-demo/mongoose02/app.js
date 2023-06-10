//注意使用populate需要引入用到的model
var AriticleMode = require("./module/ariticle")
var AriticleCateMode = require("./module/ariticlecate")
var userModel =require("./module/user")

//不推荐使用
AriticleMode.find({}).populate("cid").populate("author_id").exec().then(res=>{
  console.log(res)
})


