const jwt=require('jsonwebtoken')

const generateToken=function(data){
    data=Json.stringify(data)
    const token = jwt.sign(data, process.env.JWT_SIGN_KEY)
    return token
}
module.exports=generateToken
