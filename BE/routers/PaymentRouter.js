const express = require('express')
const router = express.Router()
const PaymentControllers = require('../controllers/paymentControllers')

router.post('/v1/api/create-order', PaymentControllers.Create)
router.get('/v1/api/create/:id/:cartid', PaymentControllers.Authencation)
router.use('/', PaymentControllers.Index)

module.exports = router