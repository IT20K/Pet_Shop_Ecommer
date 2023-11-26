const mongoose = require('mongoose')
const PaypalSchema = mongoose.Schema({
    Mode :{
        type:String
    },
    ClientId:{
        type:String
    },
    ClientSecret:{
        type:String
    },
    BaseUrl:{
        type:String
    }
})
const Paypal = mongoose.model('Paypal', PaypalSchema)
module.exports = Paypal