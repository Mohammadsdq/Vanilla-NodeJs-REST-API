const PORT = process.env.PORT || 5000;
const http = require('http');
const ProductController = require('./controllers/productController');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const apiRoute = "api";
    const productsRoute = `/${apiRoute}/products`;

    if (url === productsRoute && method === 'GET') {
        ProductController.getProducts(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Route Not Found' }));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT},http://localhost:${PORT}`);
});