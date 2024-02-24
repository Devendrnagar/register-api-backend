const mongoose =require('mongoose');

const FromSchema = new mongoose.Schema({
    name:String,
    userName:String,
    email:String,
    password:String
})
const FromModel = mongoose.model("data",FromSchema)
module.exports=FromModel;
