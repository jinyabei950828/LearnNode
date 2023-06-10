const { Schema } = require("mongoose")
var mongoose = require("./db")

var AriticleSchema = new mongoose.Schema({
  title:{
    type:String,
    unique:true
  },
  cid:{ //分类id
    type:Schema.Types.ObjectId
  },
  author_id:{
    type:Schema.Types.ObjectId
  },
  author_name:{
    type:String
  },
  description:String,
  content:String
})

module.exports = mongoose.model("Ariticle",AriticleSchema,"ariticle")