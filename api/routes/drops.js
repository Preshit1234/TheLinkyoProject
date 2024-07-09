const router = require("express").Router();
const Drop = require("../models/Dropper/Drop");
const User = require("../models/User/User")
const verify = require("../verifyToken");

//CREATE A DROP

router.post("/dropcreate", async (req,res)=>{
    const newDrop = new Drop(req.body)
    try{
        const savedDrop = await newDrop.save();
        res.status(200).json(newDrop);
    }catch(err){
        res.status(500).json("err")
    }
});


//GET ALL DROPS

router.get("/", async(req,res)=>{
    const query = req.query.new;
    let drops;
    try{ 
        if(query){
            drops = await Drop.find().sort({createdAt: -1}).limit(2)
        }
        else{
            drops = await Drop.find();
        }
        res.status(200).json(drops);
    }catch(err){
        res.status(500).json(err)
    }
});


//UPDATE A DROP

router.put("/:id", async (req,res)=>{
    try{
        const drop = await Drop.findById(req.params.id);
        if(drop.userId === req.body.userId){
            await drop.updateOne({$set:req.body});
            res.status(200).json("the drop has been updated");
        }else{
        res.status(403).json("You can only update your drop");
        }
    }catch(err){
        res.status(500).json(err);
    }
});


//DELETE A DROP

router.delete("/:id", async (req,res)=>{
    try{
        const drop = await Drop.findById(req.params.id);
        if(drop.userId === req.body.userId){
            await drop.deleteOne();
            res.status(200).json("the drop has been deleted");
        }else{
        res.status(403).json("You can only delete your drop");
        }
    }catch(err){
        res.status(500).json(err);
    }
});


//LIKE A DROP

router.put("/:id/like", async (req,res)=>{
    try{
        const drop = await Drop.findById(req.params.id);
        if(!drop.likes.includes(req.body.userId)){
            await drop.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The drop has been liked");
        }else{
            await drop.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The drop has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }
})


//GET A DROP

router.get("/:id", async (req,res)=>{
    try{
        const drop = await Drop.findById(req.params.id);
        res.status(200).json(drop)
    }catch(err){
        res.status(200).json(err);
    }
})


//GETALL DROP According to follow

router.get("/timeline/all", async (req,res)=>{
    try{
        const currentUser = await User.findById(req.body.userId);
        const userDrops = await Drop.find({ userId : currentUser._id });
        const followDrops = await Promise.all(
            currentUser.followings.map((followId)=>{
               return Drop.find({ userId: followId });
            })
        );
        res.json(userDrops.concat(...followDrops))
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;