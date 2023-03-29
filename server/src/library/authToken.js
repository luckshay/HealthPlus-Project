const jwt=require('jsonwebtoken')
require('dotenv').config();

const generateToken=function(data){
    try {
      data=JSON.stringify(data)
      const token = jwt.sign(data, process.env.JWT_SIGN_KEY)
      return token
    } catch (err) {
      console.error(err)
      return null
    }
  };
  exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Unauthorized' });
    }
  };

  module.exports=generateToken;