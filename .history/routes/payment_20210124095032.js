const express = require('express');
const router = express.Router();

const { 
    MakePayment
 } = require('../controllers/payment-controller');

 router.post('/makePayment', MakePayment);

module.exports = router;