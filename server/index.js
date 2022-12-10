const express= require("express");
const mongoose=require('mongoose');
require('dotenv').config();

//initiliaze app
const app=express();

//general routes
app.get('/',(req,res)=>{
    res.send('okay')
});

//api routes
app.use('/api/', require('./routers/api'));

const port=process.env.PORT||5000;
//server listening to port
app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
});