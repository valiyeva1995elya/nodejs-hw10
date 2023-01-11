const { Schema } = require("mongoose");

const CarSchema = new Schema({
    model: String,
    year: Number,
    color: String,
});

module.exports = {
    CarSchema,
};