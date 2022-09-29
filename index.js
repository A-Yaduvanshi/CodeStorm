const express = require("express");
const PORT=3000;
const app =express();
const mongoose= require('mongoose');
const DB="mongodb+srv://CodeStorm:codestorm@cluster0.wf0lkzj.mongodb.net/?retryWrites=true&w=majority";
const authRouter= require('./routes/authRoutes');
app.use(express.json());
app.use(authRouter);

mongoose
.connect(DB)
.then(()=>{
    console.log("Connection Successfull");
})
.catch((e)=>{
    console.log(e);
});
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected at port ${PORT}`);
});