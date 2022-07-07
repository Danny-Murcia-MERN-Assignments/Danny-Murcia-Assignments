const express = require("express");
const mongoose = require("mongoose");
const app = express(); 


app.use(express.json());

app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");


require("./routes/jokes.routes")(app);


const portNumber = 8000;

//running server
app.listen(portNumber, ()=> console.log(`Server connected on port ${portNumber}`))

