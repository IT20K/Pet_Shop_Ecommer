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
    date_create: {
        type: Date
    },
    roles: { type: mongoose.Schema.Types.ObjectId, ref: "Roles" },
    carts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Carts" }],
    invoices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Invoices" }]
});


const User = mongoose.model("Users", UserSchema)
module.exports = User;
