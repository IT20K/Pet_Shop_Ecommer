const UserModel = require("../models/userModel")
const RoleModel = require("../models/roleModel")
const { mongooseToObject, mutipleMongooseObject } = require('../util/mongoose')
const bcrypt = require('bcrypt')

class UserControllers {
    // users/
    async Index(req, res, next) {
        await UserModel.find({})
            .then((user) => {
                res.render('AccountManagement', {
                    user: mutipleMongooseObject(user)
                })
            })
            .catch(next)
    }
    // users/v1/api/get
    async GetUser(req, res) {
        const roleModel = await RoleModel.find({}).lean()
        const objectRole = mutipleMongooseObject(roleModel)
        res.render('AccountForm', { roleModel: objectRole })
    }
    // users/v1/api/create
    async CreateUser(req, res) {
        try {
            const date = new Date()
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            await UserModel.create({
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                password: hashed,
                address: req.body.address,
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                date_create: date,
                avatar: req.body.avatar,
                roles: req.body.roles,
                carts: req.body.carts,
                invoices: req.body.invoices,
            })
            res.redirect("/users")
            // return res.status(200).json(User)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // users/v1/api/detail
    async DetailAllUser(req, res) {
        try {
            const User = await UserModel.find({})
            res.send(User)
            // return res.status(200).json(User)
        }
        catch (err) {
            return res.status(500).json({ message: err.message })

        }
    }
    // users/v1/api/detail/:id
    async DetailUser(req, res) {
        try {
            const { id } = req.params
            const User = await UserModel.findById(id)
            res.render('DetailAccount', { user: mongooseToObject(User) })
        }
        catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
    // users/v1/api/delete/:id
    async DeleteUser(req, res) {
        try {
            const { id } = req.params;
            await UserModel.findByIdAndRemove(id)
            res.redirect("/users")
            // return res.status(200).json(User)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })

        }
    }
    // users/v1/api/delete
    async DeleteForm(req, res) {
        try {
            const { id } = req.params
            const User = await UserModel.findById(id)
            res.render('DeleteAccount', { user: mongooseToObject(User) })
            // return res.status(200).json(User)
        }
        catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
    // users/v1/api/delete/:id
    async GetUpdate(req, res) {
        try {

            const { id } = req.params;
            const User = await UserModel.findById(id)
            res.render("UpdateAccount", { user: mongooseToObject(User) })
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
    // users/v1/api/delete/:id
    async UpdateUser(req, res) {
        try {
            const { id } = req.params
            await UserModel.findByIdAndUpdate(id, req.body)
            // return res.status(200).json(user)
            res.redirect('/users')
        }
        catch (err) {
            return res.status(404).json({ message: err.message })

        }
    }
    // users/v1/api/login 
    async LoginUser(req, res) {
        try {
            const user = await UserModel.findOne({ email: req.body.email })
            const password = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!user) {
                res.status(404).json("email wrong")
            }
            if (!password) {
                res.status(404).json("password wrong")
            }
            if (user && password) {
                res.status(200).json(user)
            }
        }
        catch (err) {
            return res.status(500).json({ message: err.message })

        }
    }
    // users/v1/api/readrole
    async ReadRoleUser(req, res) {
        try {
            const email = await UserModel.findOne({ email: req.body.email })

            if (!email) {
                res.status(404).json('email wrong')
            }
            const RoleId= email.roles

            const role = await RoleModel.find({ _id:  {$in:RoleId}} );
            res.status(200).json(role)
        }
        catch (err) {
            return res.status(404).json({ roles:role })
        }
    }

    // users/v1/api/details/:id 
    async DetailUserProfile(req,res){
        try{
            const {id } = req.params
            const user = await UserModel.findOne({_id:id})
            return res.status(200).json(user)
        }
        catch(err){
            return res.status(404).json({message:err.message})
        }
    }

}
module.exports = new UserControllers()