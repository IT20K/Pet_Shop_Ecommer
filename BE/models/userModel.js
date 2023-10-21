const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    fullname: {
        type: String,
        default: ""
    },
    birthday: {
        type: Date,
        default: ""
    },
    avatar: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: "user",
        required: true
    },
    date_create: {
        type: Date.now()
    },
    carts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Carts" }],
    invoices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Invoices" }]
});


const User = mongoose.model("Users", UserSchema)
module.exports = User;