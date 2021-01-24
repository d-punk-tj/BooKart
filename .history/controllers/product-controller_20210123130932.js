var express = require('express');
var router = express.Router();

const GetProducts = (request, response) => {
    try {
        router.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json', function(req, res) {
           return response.json(res);
        });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const product = {
    GetProducts,
    // GetProductAttributes,
    // GetFilteredProducts,
    // GetProductDetailsById
};

module.exports = router;
