var userModel = require("./module/user")

//查找数据
// userModel.find({}).then((err,data)=>{
//   // console.log(err,data)
// })


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

// const orderModel = require("./module/order")

// orderModel.find().then((data)=>{
//   console.log("data",data)
// })

//关联查询
// orderModel.aggregate([
//   {
//     $lookup:{
//       from:'order_item',
//       localField:'order_id',
//       foreignField:'order_id',
//       as:"items"
//     }
//   },
//   {
//     $match:{"all_price":{$gte:90}}
//   }
// ]).then(res=>{
//   console.log(JSON.stringify(res))
// })


//查询订单order_item找出指定商品名称的商品，找出对应的订单号和总价格
// const OrderItemModel = require("./module/order_item")
// const OrderModel = require("./module/order")

// OrderItemModel.find({'_id':'647f2b1b372f97027e4b6373'}).then((data)=>{
//   const order_item = JSON.parse(JSON.stringify(data))
//   const order_id = order_item[0].order_id
//   OrderModel.find({"order_id":order_id}).then((child)=>{
//     order_item[0].order_info = child
//     console.log("order_item",order_item)
//   })
// })

const OrderItemModel = require("./module/order_item")
const mongoose = require("mongoose")

OrderItemModel.aggregate([
  {
    $lookup:{
      from:"order",
      localField:"order_id",
      foreignField:'order_id',
      as:'order_info'
    }
  },
  {
    $match:{_id:new mongoose.Types.ObjectId('647f2b1b372f97027e4b6373')}
  }
]).then(res=>{
  console.log(res)
})