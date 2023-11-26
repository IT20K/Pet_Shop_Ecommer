const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    quantity:{
        type:Number
    },
    price:{
        type:Number
    },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
});

const Cart = mongoose.model("Carts", CartSchema);
module.exports = Cart;