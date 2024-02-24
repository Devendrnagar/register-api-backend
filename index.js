const dotenv = require ('dotenv')
dotenv.config()
const cors = require('cors');
const express = require('express');
// const FormDataModel = require ('./models/From');
const connectDB =require ('./config/connectDB')
const userRoutes = require('./routes/userRoutes')
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT
const DATA = process.env.DATA_URL
connectDB(DATA)
// mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

// app.post('/register', (req, res)=>{
    // To post / insert data into database

    // const {email ,} = req.body;
    // FormDataModel.findOne({email: email})
    // .then(user => {
    //     if(user){
    //         res.json("Already registered")
    //     }
    //     else{
    //         FormDataModel.create(req.body)
    //         .then(log_reg_form => res.json(log_reg_form))
    //         .catch(err => res.json(err))
    //     }
    // })
    
// })
app.use("/api/user", userRoutes)


app.listen(port, () => {
    console.log(`Server listining on http://127.0.0.1:${port}`);

});