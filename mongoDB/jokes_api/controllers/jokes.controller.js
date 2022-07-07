const Joke = require("../models/jokes.model");


module.exports = {
    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=> console.log(err))
    },

    //GET ALL 
    findAllJokes: (req, res) => {
        Joke.find({})
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err) => console.log(err))
    },

  //GET ONE 
    findOneJoke: (req, res)=> {
        Joke.findOne({_id: req.params.id})
        .then((oneJoke)=> {
            console.log(oneJoke);
            res.json(oneJoke);
        })
        .catch((err) => console.log(err))
    },
    //DELETE ONE 
    deleteOneJoke: (req, res)=> {
        Joke.deleteOne({__id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => console.log(err))
    },
    //UPDATE ONE 
    updateJoke: (req, res)=> {
        Joke.findOneAndUpdate({__id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err) => console.log(err))
    },


}