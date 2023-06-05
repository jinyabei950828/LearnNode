const fs = require('fs')

exports.getMime = function(extname){
  switch(extname){
    case'.hmtl':
      return 'text/html'
    case'.css':
      return 'text/css'
    case'.js':
      return 'text/javascript'
    default:
      return 'text/html'
  }
}

// exports.getFileMime = function(extname){
//   return new Promise((resolve,reject)=>{
//     fs.readFile('./data/mime.json',(err,data)=>{
//       if(err){
//         console.log(err)
//         reject(err)
//         return;
//       }
//       let mimeObj = JSON.parse(data.toString())
//       resolve(mimeObj[extname])
//     })
//   })
// }

exports.getFileMime = function(extname){
  //同步方法
  var data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  return mimeObj[extname]
}