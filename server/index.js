const express = require("express");
const app = express();
const connectDB = require('./src/config/database');
const loginrouter = require('./src/routes/Router')
// const cors=require("cors");
const { Router } = require("express");
require('dotenv').config();

app.use(express.json())

app.use('/users', Router);

const PORT =  process.env.PORT;



connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.use(loginrouter)