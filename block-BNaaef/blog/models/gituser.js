var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var gituserSchema = new Schema({
    name :{type:String,},
    email : {type:String,unique:true},
    username:{type:String,unique:true},
    photo :{type:String}
},{timestamps:true})
var Gituser=mongoose.model("Gituser",gituserSchema)
module.exports= Gituser