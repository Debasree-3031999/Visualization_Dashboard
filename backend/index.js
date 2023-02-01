const express=require("express");
const connect=require("./config/db");
const cors=require("cors");
const port=process.env.port||5000;


const app=express();

app.use(express.urlencoded({extended:true}));
app.use(cors);
app.use(express.json)

app.listen(port,async()=>{
    try {
        await connect();
    } catch (error) {
       console.log(error) 
    }
    console.log("listening on port",port)
})

