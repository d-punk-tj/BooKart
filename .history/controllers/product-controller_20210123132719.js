const Request = require('request');


const GetProducts = (request, response) => {
    console.log("Enter");
    try {
        Request('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json', { json: true }, (err, res, body) => {
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
