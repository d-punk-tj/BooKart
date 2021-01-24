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

const GetProductDetailsByName = (request, response) => {
    try {
        Request(base_url , { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        const books = res.body;
        const query_title = request.query.title;
        console.log(query_title);
        let book = books.filter( (o) => {
            String(o.title).includes(query_title)
        });
        if(book)
            return response.json({Products:book,ProductCount:book.length});
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
            const PageSize = request.query.PageSize;
            const CurrentPage = request.query.CurrentPage;
            const bookList = books.slice(PageSize*CurrentPage,Number((PageSize*CurrentPage) + Number(PageSize)));
            return response.json({Products:bookList,ProductCount:bookList.length});

        });

    }catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}

const GetSortedProducts = (request, response) => {
   

    try{
        Request(base_url, { json: true}, (err , res, body) => {
            if(err) {return console.log(err);}
            const books = res.body;
            var sorted_book = books.sort(function(a, b) {return b.average_rating - a.average_rating});
            const PageSize = request.query.PageSize;
            const CurrentPage = request.query.CurrentPage;
            const bookList = sorted_book.slice(PageSize*CurrentPage,Number((PageSize*CurrentPage) + Number(PageSize)));
            return response.json({Products:bookList,ProductCount:bookList.length});

        });

    }catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
}



const product = {
    GetProducts,
    GetProductDetailsById,
    GetProductsStep,
    GetProductDetailsByName,
    GetSortedProducts
    // GetProductAttributes,
    // GetFilteredProducts,
    
};

module.exports = product;
