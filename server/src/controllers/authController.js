const bcrypt = require('bcrypt')
const User = require('../models/user');
// const recipientProfile = require('../models/recipientProfile');
const validator = require('validator')
const generateToken = require('../library/authToken');

exports.register = async (req, res) => {
  try {
    const { name, userType, email, password, confirmPassword } = req.body;
    
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address", success: false });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password Rejected", success: false });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Mismatch", success: false });
    }

    const existingUser = await User.findOne({ email, userType });
    
    if (existingUser) {
      return res.status(409).json({ message: 'User Already Exists', success: false });
    }
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const user = new User({
        userName: name,
        userType: userType,
        email: email.toLowerCase(),
        password: hashedPassword
      });
      
      await user.save()

      res.status(201).json({ message: 'New User Registered', success: true });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something Went Wrong' });
  }
};

exports.login = async (req, res) => {
  try {
    const userInfo = req.body;
    const userData = await User.findOne({ email: userInfo.email, userType: userInfo.userType });
    if (!userData) {
      return res.status(401).json({ message: 'User Not Found', token: null, success: false });
    }
    const isPasswordCorrect = await bcrypt.compare(userInfo.password, userData.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials', token: null, success: false });
    }

    const token = generateToken(userData._id);

    res.status(200).json({ message: 'Login successful', token, userId: userData._id, success: true });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await User.findOne({ _id: userId });
    if (!userData) {
      return res.status(401).json({ message: 'User Not Found', token: null, success: false });
    }

    res.status(200).json({ userData });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

