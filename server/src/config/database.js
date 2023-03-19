const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI=process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
  });
  };
  
  module.exports = connectDB;