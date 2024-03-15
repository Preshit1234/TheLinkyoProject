const router = require("express").Router();
const User = require("../models/User/User");
const CryptoJS = require("crypto-js");

//REMEMBER, POST = Creating, PUT = Updating, GET = Fetching
//REGISTER

router.post("/register", async (req, res) => {
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
   
});

//LOGIN

module.exports = router;