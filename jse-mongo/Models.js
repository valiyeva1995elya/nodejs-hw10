const mongoose = require("mongoose");
const { CarSchema, UserSchema } = require("./Schemas");

const UserModel = mongoose.model("User", UserSchema);
const CarModel = mongoose.model("Car", CarSchema);

module.exports = {
    CarModel,
    UserModel,
}