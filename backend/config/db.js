const mongoose=require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://admin1234:soitanPranjal@cluster0.1iwdzcf.mongodb.net/Visualization_Dashboard?retryWrites=true&w=majority").then((data)=>{
        console.log(" db connected")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports=connect;

