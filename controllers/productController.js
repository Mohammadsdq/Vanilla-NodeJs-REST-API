const ProductModel = require("../models/productModel");

async function getProducts(req, res) {
    try {
        const products = await ProductModel.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {
        console.log(error);

        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Internal Server Error' }));
        res.end();
    };
};

const ProductController = {
    getProducts
};

module.exports = ProductController;