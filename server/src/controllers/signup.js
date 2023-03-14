const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const User = require("../models/signup");

router.post('/register',async(req,res)=>{
    const user=req.body
    const Email=await User.findOne({email:user.email})
     if(Email){
        res.send('User Already Registered')
     }
     else{
       user.Password=await bcrypt.hash(req.body.Password,10)
       const dbUser=new User({
        Username:user.Username,
        email:user.email.toLowerCase(),
         Password:user.Password
       })
       await dbUser.save()
       res.send({msg:'done sab kuch theek hai!!'})
    }

})
