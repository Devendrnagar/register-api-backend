const mongoose =require ('mongoose')

const  connectDB = async (DATA_URL)=>{
    try{

        const db_name={
         dbName:"sr_fusion"
        }
        await mongoose.connect(DATA_URL,db_name)
        console.log("connected Successfully")
    }catch(error){
        console.log(error)

    }
}
module.exports = connectDB;