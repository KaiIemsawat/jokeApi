const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findJokeById);
    app.post("/api/joke", JokeController.addNewJoke);
    app.patch("/api/joke/:id", JokeController.updateJokeById);
    app.delete("/api/joke/:id", JokeController.deleteJokeById);
};
