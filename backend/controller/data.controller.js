const express=require("express");
const Data=require('../model/data.model');
const dataRouter=express.Router();

dataRouter.get("/",async(req,res)=>{
    try {
        const data=await Data.find().lean().exec();
        console.log(data);
        return res.status(200).send({getData:data})
    } catch (error) {
        console.log(error);
        return res.status(400).send({message:error});
    }
})

module.exports=dataRouter;

