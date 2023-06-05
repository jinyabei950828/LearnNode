//写入流
const fs = require("fs")

var str = ''
for(let i=0;i<500;i++){
  str+=`我是从数据库中获取的数据,我要保存起来\n`
}

const writeStream = fs.createWriteStream('./data/output.txt')

writeStream.write(str)

//标记文件末尾
writeStream.end()

writeStream.on("finish",()=>{
  console.log("写入完成")
})