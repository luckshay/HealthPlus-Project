const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateToken = function (data) {
  try {
    data = JSON.stringify(data)
    const token = jwt.sign({ data }, process.env.JWT_SIGN_KEY, { expiresIn: '1d' })
    return token
  } catch (err) {
    console.error(err)
    return null
  }
};


module.exports = generateToken;