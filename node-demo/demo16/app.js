const http = require('http');
const app = require("./module/route")
const ejs = require("ejs")
const {MongoClient} = require("mongodb")

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'itying'
const client  = new MongoClient(url)

//注册web服务
http.createServer(app).listen(3000);

app.static("public")

//配置路由
app.get("/",function(req,res){
  client.connect((err)=>{
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

app.get("/login",function(req,res){
  ejs.renderFile("./views/form.ejs",{},(err,data)=>{
    res.send(data)
  })
})

app.post("/doLogin",function(req,res){
  console.log(req.body)
  res.send(req.body)
})