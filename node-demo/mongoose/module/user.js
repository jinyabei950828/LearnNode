const mongoose  = require("./db.js")

const userSchema = mongoose.Schema({
  name:{
    type:String,
    trim:true,//去掉空格
    get(params){
      return '001'+params
    },
    index:true,//设置普通索引
    required:true,//字段必须传入
    // minlength:2, //判断字段长度
    // maxlength:20,
    // match:/^sn/ //用在string里面
    // validate:function(params){ //自定义校验
    //   return params.length>2
    // }
  },
  redirect:{
    type:String,
    set(params){ //自定义修饰符
      if(!params)return params
      if(params.indexOf("http://")!=0&&params.indexOf("https://")!=0){
        return 'https://'+params
      }
    }
  },
  age:{
    type:Number,
    min:0,
    max:150
  },
  status:{
    type:Number,
    default:1 ,//默认查收念书
    enum:[0,1,2] //设置值必须再枚举的数组里面
  }
})

//扩展静态方法
userSchema.static.findByName = function(name,cb){
  this.find({name:name}).then((err,data)=>{
    cb(err,data)
  })
}

//扩展实例方法
userSchema.methods.print = function(){
  console.log("我是一个实例方法")
}

const userModel = mongoose.model('user',userSchema,'user')


module.exports = userModel