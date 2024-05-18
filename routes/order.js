const controllers = require('../controllers');

const router = require('express').Router();

router.post('/create-order', controllers.Order.createOrder)

router.post('/order-detail', controllers.Order.orderDetails)


module.exports = router;