const express = require("express");
const router = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// === Express ===
const app = express();
// data to req obj
app.use(express.urlencoded({ extended: false }));
// enable json
app.use(express.json());
// app.use(cookieParser());
app.use(cors());
app.use(morgan("tiny"));

//mw

//routes
app.use(router);
module.exports = app;
