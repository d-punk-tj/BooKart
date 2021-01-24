const { json } = require('express');
const Request = require('request');


const GetProducts = (request, response) => {
    try {
        Request('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return response.json(res);
});
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const GetProductDetailsById = (request, response) => {
    try {
        Request('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        const book = Object.entries(res.toJSON)
        if(book)
            return response.json(book);
        else    
            return json({err:"Errr"})
        
});
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const product = {
    GetProducts,
    GetProductDetailsById
    // GetProductAttributes,
    // GetFilteredProducts,
    
};

module.exports = product;
