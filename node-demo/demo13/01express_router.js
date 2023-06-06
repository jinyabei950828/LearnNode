let app = function(){
  console.log("调用app方法")
}

app.get = function(){
  console.log("get方法")
}

app.post = function(){
  console.log("post方法")
}

app()
// app.post()