const bcrypt = require('bcrypt')
const User = require('../models/user');
const { generateToken } = require('../library/authToken');

exports.register = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User Already Exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user=new User({
        username: name,
        email: email.toLowerCase(),
        password: hashedPassword
       });
    await user.save()

    res.status(201).json({ message: 'New User Registered'});
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
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };