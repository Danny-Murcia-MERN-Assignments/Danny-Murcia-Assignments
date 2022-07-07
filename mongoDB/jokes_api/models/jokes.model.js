const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    //__id field is created automatically each time we make a new document in the collection . 
    setup: {
        type: String
    },

    punchline: {
        type: String 
    }
//timestamps automatically create "createdAt" and updatedAt date and time 

}, {timestamps: true})


const Joke = mongoose.model("Joke", JokeSchema);

//Exporting the Model
module.exports = Joke;
