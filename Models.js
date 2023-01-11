const mongoose = require("mongoose");
const { CarSchema } = require("./Schemas");

const CarModel = mongoose.model("Car", CarSchema);

module.exports = {
    CarModel,
}