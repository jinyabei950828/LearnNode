var mongoose = require("./db")

var AriticleCateSchema = new mongoose.Schema({
  title:{type:String,unique:true},
  description:String,
  addtime:{
    type:Date
  }
})

module.exports = mongoose.model("AriticleCate",AriticleCateSchema,"ariticlecate")