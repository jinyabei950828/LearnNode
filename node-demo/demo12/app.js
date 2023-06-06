const  http = require('http');
const url = require("url")
const routes = require('./module/routes')

http.createServer(function (req, res) {
  routes.static(req,res,'static')

  let pathname = url.parse(req.url).pathname.replace("/","")
  try{
    routes[pathname](req,res)
  }catch(error){
    routes['error'](req,res)
  }



}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');