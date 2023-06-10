var AriticleMode = require("./module/ariticle")

//3.2以后使用聚合管道查询
AriticleMode.aggregate([
  {
    $lookup:{
      from:'ariticlecate',
      localField:'cid',
      foreignField:'_id',
      as:'cate'
    }
  },
  {
    $lookup:{
      from:'user',
      localField:'author_id',
      foreignField:'_id',
      as:'user'
    }
  }
]).then(res=>{
  console.log(JSON.stringify(res))
})