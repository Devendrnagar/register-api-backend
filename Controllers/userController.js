const From = require('../models/From');
const bcrypt = require('bcrypt')


class userController {
    static userRegistration = async ( req , res)=>{

        const {name, username ,email,password}= req.body
       
        const user = await From.findOne({
            email:email
        })
        if(user){
            res.send({"status": "failed", "message": "Email already exists"})
        }
        else{
            if(name && userName && email && password){

                try {
                    const salt = await bcrypt.genSalt(10)
                    const hashPassword =await bcrypt.hash(password,salt)

                    const doc = new From({
                        name:name,
                        userName:userName,
                        email:email,
                        password:hashPassword,
                    })
                    await doc .save()
                    
                } catch (error){
                    console.log(error)
                    res.send ({"status":"failed","message":"unable to Register"})
                }

            }else {
        res.send({ "status": "failed", "message": "All fields are required" })
      }
        }
    }
}
module.exports=userController;
