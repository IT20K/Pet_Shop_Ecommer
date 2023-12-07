const express = require('express')
const router = express.Router()
const PaymentControllers = require('../controllers/paymentControllers')


router.get('/v1/api/create/:userid/:cardid', PaymentControllers.Authencation)
router.use('/', PaymentControllers.Index)

module.exports = router