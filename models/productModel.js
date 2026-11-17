const products = require('../data/products.json');
const FileManager = require('../utils/fileManager');

// Get all products
async function findAll() {
    return products;
}

// Get product by ID
async function findById(id) {
    return products.find(product => product.id == id);
}

// Create product
async function create(productData) {
    const newProduct = {
        id: products.length + 1,
        ...productData
    };

    products.push(newProduct);

    await FileManager.writeJSON('products.json', products);

    return {
        message: 'New product created successfully!',
        data: newProduct
    };
}

// Update product
async function update(id, payload) {
    const product = products.find(product => product.id == id);

    if (!product) {
        throw new Error('Product not found');
    }

    Object.assign(product, payload);

    await FileManager.writeJSON('products.json', products);

    return {
        message: 'Product updated successfully!',
        data: product
    };
}

// Delete product
async function remove(id) {
    const index = products.findIndex(product => product.id == id);

    if (index === -1) {
        throw new Error('Product not found');
    }

    products.splice(index, 1);

    await FileManager.writeJSON('products.json', products);

    return {
        message: 'Product deleted successfully!'
    };
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};