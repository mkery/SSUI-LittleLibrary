const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;
const catalogRouter = require("./catalog/catalog");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/catalog", catalogRouter);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Success! Server is up and running" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
 * Set up mongoose connection to our cloud database for
 * the books.
 */
var mongoose = require("mongoose");
var mongoDB =
  "mongodb://username:password@ds249575.mlab.com:49575/library_tutorial";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
