const { json, response } = require('express');
const Request = require('request');

const base_url =  'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json';


const GetProducts = (request, response) => {
    try {
        Request( base_url , { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        return response.json(res);
});
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const GetProductDetailsById = (request, response) => {
    try {
        Request(base_url , { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        const books = res.body;
        const book = books.filter(function(res) {return res.bookID == request.query.productId});
        if(book)
            return response.json(book);
        else    
            return json({err:"Not Found"})
        
});
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const GetProductsStep = (request, response) => {
    try{
        Request(base_url, { json: true}, (err , res, body) => {
            if(err) {return console.log(err);}
            const books = res.body;
            const param = request.param('page');
            const book = books.slice(0,10);
            return response.json(book);

        });

    }catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}

const product = {
    GetProducts,
    GetProductDetailsById,
    GetProductsStep,
    // GetProductAttributes,
    // GetFilteredProducts,
    
};

module.exports = product;
