const expess = require('express')
const router = expess.Router()
const ProductControllers = require('../controllers/productControllers')

// dùng multer intergate
const multer = require('multer')
// đường dẫn lưu tệp tin tải lên
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'BE/public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/v1/api/detail/:id/get', ProductControllers.DetailProductData)
router.post('/v1/api/update/:id', upload.fields([
  { name: 'ImageDisplay', maxCount: 1 },
  { name: 'ImageDisplaySub', maxCount: 1 },
  { name: 'ImageDisplaySubSub', maxCount: 1 },
  { name: 'ImageDisplaySubSubSub', maxCount: 1 },
]), ProductControllers.UpdateProduct)
router.get('/v1/api/update/:id/get', ProductControllers.UpdateForm)
router.post('/v1/api/delete/:id', ProductControllers.DeleteProduct)
router.get('/v1/api/delete/:id', ProductControllers.DeleteForm)
router.get('/v1/api/detail/:id', ProductControllers.DetailProduct)
router.get('/v1/api/detail', ProductControllers.DetailAllProduct)
router.post('/v1/api/create', upload.fields([
  { name: 'ImageDisplay', maxCount: 1 },
  { name: 'ImageDisplaySub', maxCount: 1 },
  { name: 'ImageDisplaySubSub', maxCount: 1 },
  { name: 'ImageDisplaySubSubSub', maxCount: 1 },
]), ProductControllers.CreateProduct)
router.get('/v1/api/get', ProductControllers.GetForm)
router.use('/', ProductControllers.Index)

module.exports = router