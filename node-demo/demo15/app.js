const {MongoClient} = require('mongodb')

//定义数据库路径
const url = 'mongodb://127.0.0.1:27017'
//定义操作的数据库
const dbName = 'itying'

//实例化MongoClient,传入数据库连接地址
const client = new MongoClient(url,{useUnifiedTopology:true})

//连接数据库
client.connect((err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("数据库连接成功")

  let db = client.db(dbName)

  //查找数据
  db.collection("user").find({"age":13}).toArray((err,data)=>{
    console.log(data)
    client.close()
  })

  //增加数据
  db.collection("user").insertOne({"username":"node操作mongodb","age":10},(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    console.log("增加成功",result)
    client.close()
  })

  //修改数据
  db.collection("user").updateOne({"name":"zhangsan"},{$set:{"age":10}},(err,result)=>{
    if(err){
      console.log(err)
      return;
    }
    console.log("修改成功",result)
    client.close()
  })

  //删除数据
  db.collection("user").deleteOne({"username":"nodejs"},(err){
    if(err){
      console.log(err)
      return
    }
    console.log("删除一条数据成功")
    client.close()
  })

  //删除多条数据
  db.collection("user").deleteMany({"username":"nodejs"},(err){
    if(err){
      console.log(err)
      return
    }
    console.log("删除多条数据成功")
    client.close()
  })

})