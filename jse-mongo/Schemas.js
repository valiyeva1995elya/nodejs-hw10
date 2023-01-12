const { Schema } = require("mongoose");

const UserSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
});

const CarSchema = new Schema({
    model: String,
    year: Number,
    color: String,
    owner: UserSchema,
    ownersHistory: [UserSchema],
});

module.exports = {
    CarSchema,
    UserSchema,
};