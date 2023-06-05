//读取流
const fs = require("fs")

var readStream = fs.createReadStream('./data/input.txt')

//执行次数
var count = 0
var str = ''

//读取的次数和文件的大小有关
readStream.on("data",(data)=>{
  str+=data
  count++
})

readStream.on("end",()=>{
  console.log(str)
  console.log(count)
})

readStream.on("error",(err)=>{
  console.log(err)
})
