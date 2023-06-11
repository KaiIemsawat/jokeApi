const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Title is required"],
        minLength: [10, "The title must be 3 or more characters"],
        maxLength: [250, "The title can't be over 250 characters"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minLength: [3, "The punchline can not be shorter than 3 characters"],
        maxLength: [120, "The punchline can not be longer than 120 characters"],
    },
});

// const Joke = mongoose.model("Joke", JokeSchema);

// module.exports = Joke;

module.exports = mongoose.model("Joke", JokeSchema);
