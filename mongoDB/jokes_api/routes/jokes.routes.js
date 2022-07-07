const jokesController = require("../controllers/jokes.controller");
const JokeController = require("../controllers/jokes.controller");

module.exports = (app)=> {
    app.post("/api/jokes", JokeController.createNewJoke)

    app.get("/api/jokes", JokeController.findAllJokes)

    app.get("/api/jokes/:id", JokeController.findOneJoke)

    app.delete("/api/jokes/:id", JokeController.deleteOneJoke)

    app.put("/api/jokes/:id", JokeController.updateJoke)
}