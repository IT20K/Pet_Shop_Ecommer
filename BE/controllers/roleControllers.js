const RoleModel = require("../models/roleModel");
const {mutipleMongooseObject } = require("../util/mongoose");

class RoleControllers {
    // roles/
    async Index(req, res, next) {
        await RoleModel.find({})
            .then((role) => {
                res.render("Rolemanagement", {
                    role: mutipleMongooseObject(role)
                })
            })
            .catch(next)
    }
    // roles/v1/api/getallrole
    async GetAllRole(req, res) {
        const role = await RoleModel.find({})
        res.send(role)
    }
    // roles/v1/api/get
    async GetRole(req, res) {
        res.render('RoleForm')
    }
    // roles/v1/api/create
    async CreateRole(req, res) {
        try {
            const role = await RoleModel.create({
                rolename: req.body.rolename,
                roledescription: req.body.roledescription,
                permissionLevel:req.body.permissionLevel
            })
            return res.status(200).json(role)
        }
        catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
}


module.exports = new RoleControllers()