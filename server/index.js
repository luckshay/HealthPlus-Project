const express = require("express");
const connectDB = require('./src/config/database');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('dotenv').config();
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

app.get('/', (_req, res) => res.send("Welcome to Server"));

const authRoutes = require('./src/routes/authRoutes')
app.use('/api/auth', authRoutes);

const compStatsRoutes = require('./src/routes/compStatsRoutes')
app.use('/api/analysis', compStatsRoutes)

const userqueryRoutes = require('./src/routes/userqueryRoutes')
app.use('/api/userquery', userqueryRoutes)