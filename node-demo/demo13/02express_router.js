let G = {}

let app = function(req,res){
  //执行方法
  if(G['/login']){
    G['/login'](req,res)
  }
}

app.get = function(str,cb){
  //注册方法
  G[str] = cb
}

app.post = function(){
  console.log("post方法")
}

//调用
app.get("/login",function(req,res){
  console.log("执行login方法")
})

setTimeout(()=>{
  app()
},1000)