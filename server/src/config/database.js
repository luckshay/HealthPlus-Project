const mongoose = require('mongoose');
require('dotenv').config();
// const DB_URI = 'mongodb://localhost:27017/testuser';
// const DB_URI = 'mongodb+srv://admin:dWB2NWV88lptI3tW@healthplus.evvargk.mongodb.net/?retryWrites=true&w=majority';
const DB_URI = process.env.MONGO_URI;


const connectDB = async () => {
    try {
      await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('MongoDB connected successfully!');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  };
  
  module.exports = connectDB;