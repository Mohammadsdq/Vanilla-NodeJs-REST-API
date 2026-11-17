const PORT = process.env.PORT || 5000;
const http = require('http');
const ProductController = require('./controllers/productController');
const ErrorController = require('./controllers/errorController');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const apiRoute = "api";
    const productsRoute = `/${apiRoute}/products`;
    const singleProductRoute = /\/api\/products\/[0-9]+/;


    if (url === productsRoute && method === 'GET') {
        // Get all products
        ProductController.getProducts(req, res);
    } else if (url === productsRoute && method === 'POST') {
        // Create a new product
        ProductController.createProduct(req, res);
    } else if (url.match(singleProductRoute) && method === 'GET') {
        // Get single product by id
        ProductController.getProductById(req, res);
    } else if (url.match(singleProductRoute) && method === 'PUT') {
        // Update single product by id
        ProductController.updateProductById(req, res);
    } else if (url.match(singleProductRoute) && method === 'DELETE') {
        // Delete single product by id
        ProductController.deleteProductById(req, res);
    } else {
        // Handle 404 Not Found
        ErrorController.notFoundRoute(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT},http://localhost:${PORT}`);
});