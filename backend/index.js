const express=require("express");
const connect=require("./config/db");
// const cors=require("cors");
const dataModel=require('./model/data.model');
const dataController=require("./controller/data.controller");

const port=process.env.port||8080;


const app=express();

app.use(express.urlencoded({extended:true}));
// app.use(cors);
app.use(express.json())
app.use("/",dataController);

app.listen(port,async()=>{
    try {
        await connect();
    } catch (error) {
       console.log(error) 
    }
    console.log("listening on port",port)
})

