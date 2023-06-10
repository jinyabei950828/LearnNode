var AriticleCateMode = require("./module/ariticlecate")
var UserMode = require("./module/user")
var AriticleMode = require("./module/ariticle")

// 分类的增加
// var cate = new AriticleCateMode({
//   title:"国内新闻",
//   description:'国内新闻',
// })

// cate.save()


//增加用户
// var user = new UserMode({
//   username:"lisi",
//   password:"121313131313123",
//   name:"李四",
//   age:20,
//   sex:"男",
//   tel:12421521511
// })

// user.save()

var ariticle = new AriticleMode()

ariticle.title="这是个国内新闻1111"
ariticle.cid = "648491a01c563afa88a7b5bb"
ariticle.author_id="6484934eaeadb32a1888a287"
ariticle.author_name="张三"
ariticle.description="出国访问,此处省略300字"
ariticle.content="出国访问,此处省略1000字"

ariticle.save()