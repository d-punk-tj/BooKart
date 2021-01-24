const Request = require('request');

https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'

const GetProducts = (request, response) => {
    try {
        request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
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

module.exports = product;
