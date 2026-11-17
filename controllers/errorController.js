async function notFoundRoute(res) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Route Not Found' }));
    res.end();
};

const ErrorController = {
    notFoundRoute
};

module.exports = ErrorController;