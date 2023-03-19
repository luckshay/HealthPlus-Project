const express=require("express")
const router=express.Router();

const generateAuthToken = require("../library/jsontokengenerator");



router.post('/', async(req, res)=>{
    const userInfo=req.body;
    let userData;
    try{
        userData = await userData.findOne({email:userInfo.email})
    }
    catch(err){
        console.log(err,'err')
    }

    if(!userData){
        res.status(401).send({msg:"User Not Found!"})
    }

    const validPassword = bcrypt.compare(userInfo.password, userData.password).catch(err=>{
        console.log(err,"Error in Validating Password!")
        res.status(500).send({msg:"Internal Sever Error!"})
    })
    if(!validPassword){
        res.send({msg:"Invalid Password!"})
    }

    const token = generateAuthToken(userData)
    res.status(200).send({
        data:{
            token:token,userData
        },
        msg:"sb kuch thik h, done h!!"
    })
    
})

module.exports = router