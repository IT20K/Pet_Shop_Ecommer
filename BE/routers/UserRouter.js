const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userControllers')



router.get("/v1/api/details/:id", UserController.DetailUserProfile)
router.get("/v1/api/readrole",UserController.ReadRoleUser)
router.post("/v1/api/login",UserController.LoginUser)
router.post("/v1/api/update/:id",UserController.UpdateUser)
router.get("/v1/api/update/:id/get",UserController.GetUpdate)
router.post("/v1/api/delete/:id", UserController.DeleteUser)
router.get("/v1/api/delete/:id", UserController.DeleteForm)
router.get("/v1/api/detail/:id", UserController.DetailUser)
router.get("/v1/api/detail", UserController.DetailAllUser)
router.post("/v1/api/create",UserController.CreateUser)
router.get("/v1/api/get",UserController.GetUser)
router.use('/', UserController.Index)

module.exports = router