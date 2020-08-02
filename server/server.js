const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database/db");
const route = require("./routes/user-routes.js");
const passport = require("passport");
 

const app = express();

const port = process.env.PORT || 3000;


mongoose.connect(database.db, {useNewUrlParser: true})
.then(() => {
    console.log("Database is connected successully")
}).catch((err) => {
    console.log("Database could not be connected due to " + err)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/users", route );

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });


app.listen(port, () => {
    console.log("Server is running on port " + port)
});


