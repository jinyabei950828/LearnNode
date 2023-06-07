const multer = require("multer")
const path = require("path")
const sd = require("silly-datetime")
const {mkdirp} = require("mkdirp")

let tools = {
  //上传模块封装
  multer(){
    //上传资源的目录(上传之前目录必须存在)
    const storage = multer.diskStorage({
      destination:async (req,file,cb)=>{
        let day = sd.format(new Date(),"YYYYMMDD")
        let dir = path.join("static/upload",day)
        //异步方法
        await mkdirp(dir)
        cb(null,dir)
      },
      filename:function(req,file,cb){
        const extname = path.extname(file.originalname)
        cb(null,file.fieldname+"-"+Date.now()+extname)
      }
    })

    const upload = multer({storage:storage})
    return upload
  }
}

module.exports = tools