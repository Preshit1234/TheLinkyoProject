const router = require("express").Router();
const User = require("../models/User/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE

router.put("/:id", verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        };
    
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{
                new: true
            });
            res.status(200).json(updatedUser);

        }catch{
            req.status(500).json(err);
        }
    } else{
        res.status(403).json("you can update only your account");
    }
});

//DELETE

router.delete("/:id", verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
    
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");

        }catch{
            req.status(500).json(err);
        }
    } else{
        res.status(403).json("you can delete only your account");
    }
});

//GET 

router.get("/find/:id", async (req,res)=>{
        try{
            const user = await User.findById(req.params.id);
            const { password, ...info } = user._doc;
            res.status(200).json(info);
        }catch{
            req.status(500).json(err);
        }
});

//GET ALL USER

router.get("/", verify, async (req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const user = query ? await User.find().sort({_id:-1}).limit(10) : await User.find()
            res.status(200).json(user);

        }catch{
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("you are not allowed to see all users");
    }
});

//GET USER STATISTICS


module.exports = router;