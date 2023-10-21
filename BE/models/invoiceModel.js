const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({
    addressship: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: ""
    },
    timeordered: {
        type: Date.now(),
        default: ""
    },
    note: {
        type: String,
        default: ""
    },
    listproducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
    users: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
})

const Invoice = mongoose.model("Invoices", InvoiceSchema)
module.exports = Invoice;