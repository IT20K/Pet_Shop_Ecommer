const UserModel = require('../models/userModel')
const CartModel = require('../models/cartModel')
const ProductModel = require('../models/productModel')
class CartController {
    // carts
    Index(req, res) {
        res.send('cart controller')
    }

    // carts/v1/api/add 
    async Add(req, res) {
        try {
            // tìm user 
            const { id } = req.params
            const User = await UserModel.findById(id)
            // kiểm tra user tồn tại hay không
            if (!User) {
                return res.status(404).json({ message: "User not found" })
            }
            const products = req.body.products

            const Cart = await CartModel.create({
                quantity: req.body.quantity,
                price: req.body.price,
                products: products,
                users: User.id
            })
            await User.carts.push(Cart)
            await User.save()
            return res.status(200).json(Cart)
        }
        catch (err) {
            return res.status(500).json({ message: err.message })
        }

    }
    // carts/v1/api/read/:id  ---> tìm cart của user
    async Read(req, res) {
        try {
            const { id } = req.params
            const User = await UserModel.findById(id).populate('carts')

            if (!User) {
                return res.status(404).json({ message: "User not found" })
            }

            return res.status(200).json(User.carts)
        }
        catch (err) {
            return res.status(200).json({ message: err.message })
        }
    }

    // carts/v1/api/read/:id/product
    async ReadCartUser(req, res) {
        try {
            const { id } = req.params

            const CartProduct = await CartModel.findById(id)
            const ProductID = await ProductModel.findById(CartProduct.products)
            return res.status(200).json(ProductID)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // carts/v1/api/delete/:id/:cartID
    async Delete(req, res) {
        try {
            const { id, cartID } = req.params;
            const User = await UserModel.findById(id)
            if (!User) {
                return res.status(404).json({ message: "User not found" })
            }
            User.carts.pull(cartID)
            await User.save()
            await CartModel.findByIdAndDelete(cartID);
            return res.status(200).json(User)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // carst/v1/api/delete/:id/all
    async DeleteAll(req, res) {
        try {
            const { id } = req.params
            const User = await UserModel.findById(id)
            await CartModel.deleteMany({ users: id })
            if (!User) {
                return res.status(404).json({ message: "User not found" })
            }
            User.carts = []
            await User.save()

            return res.status(200).json(User)

        }
        catch (err) {
            console.log({ message: err.message })
        }
    }
    // carts/v1/api/update/:id/:idcart
    async Update(req, res) {
        try {
            const { id, cartID } = req.params
            const { quantity } = req.body
            const User = await UserModel.findById(id).populate("carts")
            if (!User) {
                return res.status(404).json({ message: "User not found" })
            }
            const Cart = await CartModel.findById(cartID)
            Cart.quantity = quantity
            await Cart.save()
            return res.status(200).json(Cart.quantity)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
}
module.exports = new CartController()
