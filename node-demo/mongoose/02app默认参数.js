const mongoose = require("mongoose")
const {Schema,model} = require("mongoose")

mongoose.connect('mongodb://eggadmin:123456@127.0.0.1:27017/eggcms').then((err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("连接成功")
})

//schema里面的字段和数据库表里面的一模一样
var userSchema = new Schema({
  _id:Schema.Types.ObjectId,
  name:String,
  age:Number,
  status:{
    type:Number,
    default:1 //默认查收念书
  }
})

//定义数据库模型,操作数据库
var User = model('user',userSchema,"users")

//查找数据
User.find({}).then((err,data)=>{
  console.log(err,data)
})


//新增数据
// const u = new User({
//   name:"李四",
//   age:20,
//   status:1
// })

// u.save()

//更新数据
// User.updateOne(
//   {"_id":"64805f0484f4d73e66a778fd"},
//   {"age":2}).then((result)=>{
//   console.log(result)
// })

//删除数据
// User.deleteOne({"_id":"64805f3421347d312e8eb2d9"}).then((err,data)=>{
//   console.log(err,data)
// })

