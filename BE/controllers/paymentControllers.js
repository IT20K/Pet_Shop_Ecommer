const UserModel = require('../models/userModel')
const PaymentModel = require('../models/paypalModel')
const CartModel = require('../models/cartModel')
class PaymentControllers {
    // payments
    Index(req, res, next) {
        res.send('payment')
    }
    // payments/v1/api/create/:userid/:cardid

    async Authencation(req, res) {
        try {
            const { clientid, userid, cartid } = req.body
            const User = await UserModel.findById(userid)
            if (!User.id) {
                return res.status(404).json({ message: 'User not found' })
            }
            const Client = await PaymentModel.findById(clientid)
            if (!Client.clientid) {
                return res.status(404).json({ message: 'Payment not found' })
            }
            const Cart  = await CartModel.findById(cartid)
            if(!Cart.id){
                return res.status(404).json({message:'Cart not found'})
            }

            const payment = await PaymentModel.create({
                clientid: req.body.clientid,
                clientsecret: req.body.clientsecret,
                users: req.body.users
            })

            await User.payments.push(payment)
            await User.save()
            return res.status(200).json(User)
        }
        catch (err) {
            return res.status(200).json({ message: err.message })
        }
    }
}
module.exports = new PaymentControllers()
