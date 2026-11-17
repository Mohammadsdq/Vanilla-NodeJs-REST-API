const products = require('../data/products.json');

async function findAll() {
    return new Promise((resolve, reject) => {
        if (products) resolve(products);
        else reject(new Error('Products not found'));
    });
};

const ProductModel = {
    findAll
};

module.exports = ProductModel;