const express = require('express')
const router = express.Router()
const CartController = require('../controllers/cartControllers')



router.post('/v1/api/update/:id/:cartID',CartController.Update)
router.post('/v1/api/delete/:id/all',CartController.DeleteAll)
router.post('/v1/api/delete/:id/:cartID',CartController.Delete)
router.get('/v1/api/read/:id/product',CartController.ReadCartUser)
router.get('/v1/api/read/:id',CartController.Read)
router.post('/v1/api/add/:id', CartController.Add)
router.use('/', CartController.Index)
module.exports = router