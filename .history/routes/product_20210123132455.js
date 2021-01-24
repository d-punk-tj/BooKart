const express = require('express');
const router = express.Router();

const { 
    GetProducts,
    GetProductAttributes,
    GetFilteredProducts,
    GetProductDetailsById
 } = require('../controllers/product-controller');

//get all Product
router.get('/getProducts', GetProducts);

// router.get('/getProductAttributes', GetProductAttributes)

// router.post('/getFilteredProducts', GetFilteredProducts);

// router.get('/getProductDetails', GetProductDetailsById)


module.exports = router;