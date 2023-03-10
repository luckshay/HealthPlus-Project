const express = require("express");
const app = express();
const connectDB = require('./src/config/database');
const routes = require('./src/routes/Router')
const cors=require("cors");
const { Router } = require("express");

app.use(express.json())

app.use('/users', Router);

const PORT =  5000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });