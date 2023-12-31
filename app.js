require("dotenv").config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();






mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));



    
app.use(
    cors({
        origin: "*",
        exposedHeaders: 'Authorization'
    })
);


const authRouter = require('./apiRoutes/auth');
const buyerRouter = require('./apiRoutes/buyers');
const sellerRouter = require('./apiRoutes/sellers');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/auth', authRouter);
app.use('/api/buyer', buyerRouter);
app.use('/api/seller', sellerRouter);

// const product = require("./Entities/products")

// async function call(){

//     const d = new product({name:"jacket",price:"5000"})
//    const b= await d.save();
//    console.log(b)
// }

// call();





app.listen(process.env.PORT || '5000', () => {
    console.log(`Server started at port ${process.env.PORT || '5000'}`);
});
