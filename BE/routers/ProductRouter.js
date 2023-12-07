const expess = require('express')
const router = expess.Router()
const ProductControllers = require('../controllers/productControllers')



router.get('/v1/api/detail/:id/get', ProductControllers.DetailProductData)
router.post('/v1/api/update/:id', ProductControllers.UpdateProduct)
router.get('/v1/api/update/:id/get', ProductControllers.UpdateForm)
router.post('/v1/api/delete/:id', ProductControllers.DeleteProduct)
router.get('/v1/api/delete/:id', ProductControllers.DeleteForm)
router.get('/v1/api/detail/:id', ProductControllers.DetailProduct)
router.get('/v1/api/detail', ProductControllers.DetailAllProduct)
router.post('/v1/api/create', ProductControllers.CreateProduct)
router.get('/v1/api/get', ProductControllers.GetForm)
router.use('/', ProductControllers.Index)

module.exports = router