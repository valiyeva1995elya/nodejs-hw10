const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carsRouter = require("./routers/carsRouter");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://Elya:elya@cluster0.qmgwgf9.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        console.log("server started");
        app.use("/cars", carsRouter);
        app.listen(8080);
    }
})
