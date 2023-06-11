const mongoose = require("mongoose");

//                  Only need to change the name of the database
//                  If the database is not existed, it will create one with the name
mongoose
    .connect("mongodb://127.0.0.1:27017/joker", {
        useNewUrlParser: true, // <--- Option passed to get rid of deprecation message in terminal
        useUnifiedTopology: true, // <--- Option passed to get rid of deprecation message in terminal
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
        console.log(
            "Something went wrong when connecting to the database ",
            err
        )
    );
