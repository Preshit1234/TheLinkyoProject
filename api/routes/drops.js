const router = require("express").Router();
const Drop = require("../models/Dropper/Drop");
const verify = require("../verifyToken");

//CREATE A DROP

router.post("/", async (req,res)=>{
    const newDrop = new Drop(req.body)
    try{
        const savedDrop = await newDrop.save();
        res.status(200).json(newDrop);
    }catch(err){
        res.status(500).json("err")
    }
})
//UPDATE A DROP
//DELETE A DROP
//LIKE A DROP
//GET A DROP
//GETALL DROP



module.exports = router;