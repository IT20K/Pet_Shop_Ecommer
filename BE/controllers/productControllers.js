const ProductModel = require("../models/productModel")
const { mongooseToObject, mutipleMongooseObject } = require('../util/mongoose')
const path = require('path')
class ProductControllers {
    // products/
    async Index(req, res, next) {
        await ProductModel.find({})
            .then((product) => {
                res.render('ProductManagement', {
                    product: mutipleMongooseObject(product)
                })
            })
            .catch(next)
    }
    // products/get
    async GetForm(req, res) {
        res.render("ProductForm")
    }

    // products/create
    async CreateProduct(req, res) {
        try {
            const uploadedFiles = req.files;
            const product = await ProductModel.create({
                productname: req.body.productname,
                currency: req.body.currency,
                weight: req.body.weight,
                quality: req.body.quality,
                brand: req.body.brand,
                category: req.body.category,
                sold: req.body.sold,
                producter: req.body.producter,
                organised: req.body.organised,
                ImageDisplay: uploadedFiles['ImageDisplay'] ? path.join(uploadedFiles['ImageDisplay'][0].filename) : '',
                ImageDisplaySub: uploadedFiles['ImageDisplaySub'] ? path.join(uploadedFiles['ImageDisplaySub'][0].filename) : '',
                ImageDisplaySubSub: uploadedFiles['ImageDisplaySubSub'] ? path.join(uploadedFiles['ImageDisplaySubSub'][0].filename) : '',
                ImageDisplaySubSubSub: uploadedFiles['ImageDisplaySubSubSub'] ? path.join(uploadedFiles['ImageDisplaySubSubSub'][0].filename) : '',
                comments: req.body.comments,
            })
            res.redirect("/products")
            // return res.status(200).json(product)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }

    // products/v1/api/detail
    async DetailAllProduct(req, res) {
        try {
            const product = await ProductModel.find({}).lean()
            res.send(product)
            // return res.status(200).json(product)

        }
        catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }



    // products/v1/api/detail/:id
    async DetailProduct(req, res) {
        try {
            const { id } = req.params
            const Product = await ProductModel.findById(id)

            res.render('DetailProduct', { product: mongooseToObject(Product) })
            // return res.status(200).json(product)
        }
        catch (err) {
            return res.status(500).json({ messgae: err.message })
        }
    }





    // products/v1/api/delete/:id
    async DeleteForm(req, res) {
        try {
            const { id } = req.params
            const Product = await ProductModel.findById(id)
            res.render('DeleteProduct', { product: mongooseToObject(Product) })
            // return res.status(200).json(product)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // products/v1/api/delete/:id
    async DeleteProduct(req, res) {
        try {
            try {
                const { id } = req.params;
                await ProductModel.findByIdAndRemove(id)
                res.redirect("/products")
                // return res.status(200).json(Product)
            }
            catch (err) {
                return res.status(404).json({ message: err.message })

            }
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }

    // products/v1/api/update/:id/get
    async UpdateForm(req, res) {
        try {
            const { id } = req.params
            const Product = await ProductModel.findById(id)
            res.render('UpdateProduct', { product: mongooseToObject(Product) })
            // return res.status(200).json(product)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // products/v1/api/update/:id
    async UpdateProduct(req, res) {
        const { id } = req.params
        // const uploadedFiles = req.files;
        await ProductModel.findByIdAndUpdate(id,req.body)
        // return res.status(200).json(product)
        res.redirect('/products')

    }
    // products.v1/api/detail/:id/get
    async DetailProductData(req, res) {
        try {
            const { id } = req.params
            const Product = await ProductModel.findById(id)
            res.send(Product)
            // return res.status(200).json(product)
        }
        catch (err) {
            return res.status(500).json({ messgae: err.message })
        }
    }
}
module.exports = new ProductControllers()