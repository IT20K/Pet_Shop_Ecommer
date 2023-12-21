const UserModel = require('../models/userModel')
const PaymentModel = require('../models/paypalModel')
const CartModel = require('../models/cartModel')
const paypal = require('@paypal/checkout-server-sdk')

// 
class PaymentControllers {
    // payments
    Index(req, res, next) {
        res.send('payment')
    }

    // payments/v1/api/create/id/:cardid
    async Authenticate(req, res) {
        try {
            const { id } = req.params
            const User = await UserModel.findById(id)
            if (!User.id) {
                return res.status(404).json({ message: 'User not found' })
            }
            const Cart = User.carts.find(id => id._id.toString() == id.toString())
            const Parse = await CartModel.findById(Cart)
            return res.status(200).json(Parse)
        }
        catch (err) {
            return res.status(200).json({ message: err.message })
        }
    }
    
    async Create(req, res) {
        try {
            try {
                const { id } = req.params
                const User = await UserModel.findById(id)
                if (!User.id) {
                    return res.status(404).json({ message: 'User not found' })
                }
                const Cart = User.carts

                const payment = await PaymentModel.create({
                    clientid:process.env.PAYPAL_CLIENT_ID,
                    clientsecret:process.env.PAYPAL_CLIENT_SECRET,
                    total: req.body.total,
                    users:req.body.users,
                    invoices:Cart
                })
                return res.status(200).json(payment)
            }
            catch (err) {
                return res.status(200).json({ message: err.message })
            }
        }
        catch (err) {

        }
    }
}
module.exports = new PaymentControllers()


//const Environment = process.env.NODE_ENV === "production"
//     ? paypal.core.LiveEnvironment
//     : paypal.core.SandboxEnvironment



// const paypalClient = new paypal.core.PayPalHttpClient(
//     new Environment(
//         process.env.PAYPAL_CLIENT_ID,
//         process.env.PAYPAL_CLIENT_SECRET
//     )
// )

// async Create(req, res) {
//     const request = new paypal.orders.OrdersCreateRequest();
//     const total = req.body.total;

//     request.prefer('return=representation');
//     request.requestBody({
//         intent: 'CAPTURE',
//         purchase_units: [
//             {
//                 amount: {
//                     currency_code: 'USD',
//                     value: total,
//                     breakdown: {
//                         item_total: {
//                             currency_code: 'USD',
//                             value: total,
//                         },
//                     },
//                 },
//             },
//         ],
//     });

//     try {
//         const order = await paypalClient.execute(request);
//         const orderId = order.result.id; // Lấy Order ID từ order
//         await newPayment.save(); // Lưu thông tin đơn hàng vào cơ sở dữ liệu

//         return res.status(200).json(order);
//     } catch (err) {
//         return res.status(500).json({ message: err.message });
//     }
// }