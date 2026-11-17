const ProductModel = require("../models/productModel");

// Get all products
async function getProducts(req, res) {
    try {
        const products = await ProductModel.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    };
};

// Create a new product
async function createProduct(req, res) {
    try {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const productData = JSON.parse(body);
            const newProduct = await ProductModel.create(productData);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newProduct));
        });
    } catch (error) {
        console.log(error);
    };
};

// Get single product by id
async function getProductById(req, res) {
    try {
        const [, , , id] = req.url.split("/");
        const product = await ProductModel.findById(id);

        if (!product) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Product not found!" }));
        } else {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    };
};

// Update single product by id
async function updateProductById(req, res) {
    try {
        let body = ""
        const [, , , id] = req.url.split("/");
        req.on("data", chunk => {
            body += chunk.toString();
        })
        req.on("end", async () => {
            const parsedBody = { ...JSON.parse(body) }
            const product = await ProductModel.findById(id)

            if (!product) {
                res.writeHead(404, { "content-type": "application/json" })
                res.write(JSON.stringify({ "message": "Product not found!" }))
                res.end();
            } else {

                const result = await ProductModel.update(id, parsedBody);
                res.writeHead(200, { "content-type": "application/json" })
                res.write(JSON.stringify(result))
                res.end();
            }

        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteProductById(req, res) {
    try {
        const [, , , id] = req.url.split("/");

        const product = await ProductModel.findById(id);

        if (!product) {
            res.writeHead(404, { "content-type": "application/json" })
            res.write(JSON.stringify({ "message": "Product not found!" }))
            res.end();
        } else {
            const result = await ProductModel.remove(id)
            res.writeHead(200, { "content-type": "application/json" })
            res.write(JSON.stringify(result))
            res.end();
        }

    } catch (error) {
        console.log(error);
    }
}

const ProductController = {
    getProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
};

module.exports = ProductController;