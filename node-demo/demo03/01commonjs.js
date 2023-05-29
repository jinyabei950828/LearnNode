var http = require('http');

function formatApi(api){
  return "http://www.itying.com/"+api
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<head><meta charset='utf-8'/></head>")

  var api = formatApi('api/plist')
  res.write(api)
  
  res.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');