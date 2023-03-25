const bcrypt = require('bcrypt')
const User = require('../models/user');
const validator=require('validator')
const { generateToken } = require('../library/authToken');

exports.register = async (req, res) => {
  try {
    const {name, userType, email, password, confirmPassword} = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password Rejected" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Mismatch" });
    } 

    const existingUser = await User.findOne({ email, userType });
    if (existingUser) {
      return res.status(409).json({ message: 'User Already Exists' });
    }
    else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user=new User({
        userName: name,
        userType: userType,
        email: email.toLowerCase(),
        password: hashedPassword
       });
    await user.save()

    res.status(201).json({ message: 'New User Registered'});
    }
  } catch (error) {
    res.status(500).json({ message: 'Something Went Wrong'});
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = generateToken(user._id);
      res.status(200).json({ token: token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };