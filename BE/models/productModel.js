const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
    productname: {
        type: String,
        default: ""
    },
    currency: {
        type: Number,
        default: ""
    },
    weight: {
        type: Number,
        default: ""
    },
    quality: {
        type: Number,
        default: ""
    },
    brand: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    sold: {
        type: Number,
        default: "",
    },
    producter: {
        type: String
    },
    organised: {
        type: String
    },
    ImageDisplay: {
        type: String,
        default: ""
    },
    ImageDisplaySub: {
        type: String,
        default: ""
    },
    ImageDisplaySubSub: {
        type: String,
        default: ""
    },
    ImageDisplaySubSubSub: {
        type: String,
        default: ""
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }]

});

const Product = mongoose.model("Products", ProductModel);
module.exports = Product;