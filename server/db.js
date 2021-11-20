const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
require("dotenv").config();

MongoClient.connect(process.env.CONNECTIONSTRING, (err, client) => {
  if (!err) {
    // define database
    const db = client.db("nuxt_practice");
    module.exports = db;
    console.log(">>> DB connected...");
    // get app
    const app = require("./app");
    console.log(">>> APP listen...");
    app.listen(process.env.PORT);
    // Mongo default
    assert.equal(null, err);
  } else {
    console.log(err);
  }
});
