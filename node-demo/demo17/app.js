const http = require('http');
const app = require("./module/route")
const ejs = require("ejs")
const {MongoClient} = require("mongodb")
const querystring = require("querystring")

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'itying'

//注册web服务
http.createServer(app).listen(3000);

app.static("public")

//配置路由
app.get("/",function(req,res){
  MongoClient.connect(url,(err,client)=>{
    if(err){
      console.log(err)
      return
    }
    let db = client.db(dbName)

    db.collection("user").find({}).toArray((err,data)=>{
      if(err){
        console.log(err)
        return;
      }
      console.log(result)
      client.close()

      ejs.renderFile("./views/index.ejs",{list:result},(err,data)=>{
        res.send(data)
      })
    })
  })
})

app.get("/register",function(req,res){
  ejs.renderFile("./views/form.ejs",{},(err,data)=>{
    res.send(data)
  })
})

app.post("/doRegister",function(req,res){
  console.log(req.body)
  let body = querystring.parse(req.body)
  MongoClient.connect(url,(err,client)=>{
    if(err){
      console.log(err)
      return
    }

    let db = client.db(dbName)

    db.collection("user").insertOne(body,(err,reuslt)=>{
      if(err){
        console.log(err)
        return
      }
      client.close()
      console.log("增加数据成功")
      res.send("增加数据成功")
    })
  })
})