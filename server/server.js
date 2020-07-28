const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database/db");
const route = require("./routes/user-routes.js");
const passport = require("passport");
require("./config/passport")(passport);

const app = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect(database.db, {useNewUrlParser: true})
.then(() => {
    console.log("Database is connected successully")
}).catch((err) => {
    console.log("Database could not be connected due to " + err)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/users", route );
app.use(passport.initialize());

app.listen(port, () => {
    console.log("Server is running on port " + port)
});


