const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get('/test', async(req,res)=>{
    try{
        const doc = await User.create({username:"Jayavardhan"});
        console.log(doc);
        res.send(doc);
    }catch(e){
        console.log(e)
        res.send(e);
    }
})

module.exports = router;