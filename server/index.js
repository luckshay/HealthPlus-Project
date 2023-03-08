const express=require("express");

const PORT = process.env.PORT || 5500;

const app = express();

app.listen(PORT, ()=>console.log(`Server is up on port ${PORT}!!`));