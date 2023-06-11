const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, resp) => {
    Joke.find()
        .then((allJokes) => {
            resp.status(200).json(allJokes);
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.findJokeById = (req, resp) => {
    console.log(req.params);
    Joke.findOne({ _id: req.params.id })
        .then((OneJoke) => {
            resp.status(200).json(OneJoke);
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something must went wrong",
                error: err,
            });
        });
};

module.exports.addNewJoke = (req, resp) => {
    Joke.create(req.body)
        .then((newJoke) => {
            resp.status(201).json(newJoke);
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.updateJokeById = (req, resp) => {
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateJoke) => {
            resp.status(200).json(updateJoke);
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.deleteJokeById = (req, resp) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            resp.json({ result: result });
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};
