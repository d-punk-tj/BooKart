const express = require('express');
const router = express.Router();

const { 
    GetProducts,
    GetProductDetailsById,
    GetProductsStep,
    GetProductDetailsByName,
    GetSortedProducts
 } = require('../controllers/product-controller');

//get all Product
router.get('/getallProducts', GetProducts);
router.get('/getProductsByPage', GetProductsStep);
router.get('/getProductDetails', GetProductDetailsById);
router.get('/getProductByName', GetProductDetailsByName);
router.get('/getSortedProducts',GetSortedProducts)




module.exports = router;