const mongoose =require('mongoose');

const FromSchema = new mongoose.Schema({
    name:{ type: String, required: true, trim: true },
    userName:{ type: String, required: true, trim: true },
    email:{ type: String, required: true, trim: true },
    password:{ type: String, required: true, trim: true }
})
const FromModel = mongoose.model("data",FromSchema)
module.exports=FromModel;
