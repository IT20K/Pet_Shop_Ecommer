const mongoose = require('mongoose')
const PaypalSchema = mongoose.Schema({
    mode :{
        type:String
    },
    clientid:{
        type:String
    },
    clientsecret:{
        type:String
    },
    baseurl:{
        type:String
    },
    total:{
        type:Number
    },
    users:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    invoices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Invoices" }]

})
const Paypal = mongoose.model('Payments', PaypalSchema)
module.exports = Paypal