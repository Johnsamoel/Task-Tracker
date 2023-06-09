
const mongoose = require('mongoose');
const express=require('express')
const{DB_USERNAME,DB_PASSWORD,DB_NAME}=require("./configuration")
const app=express()
// connecting to the Database using env variables
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wtbncmz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`).then(() => {
    app.listen(3001)
}).catch(()=>{
    throw new Error("Database connection is failed")
})

module.exports=app