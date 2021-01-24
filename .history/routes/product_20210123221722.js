const express = require('express');
const router = express.Router();

const { 
    GetProducts,
    GetProductAttributes,
    GetFilteredProducts,
    GetProductDetailsById,
    GetProductsStep,
    GetProductDetailsByName
 } = require('../controllers/product-controller');

//get all Product
router.get('/getallProducts', GetProducts);
router.get('/getProductsByPage', GetProductsStep);
router.get('/getProductDetails', GetProductDetailsById);
router.get('/getProductByName', GetProductDetailsByName)

// router.get('/getProductAttributes', GetProductAttributes)

// router.post('/getFilteredProducts', GetFilteredProducts);




module.exports = router;