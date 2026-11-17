const PORT = process.env.PORT || 5000;
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Hello World' }));
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT},http://localhost:${PORT}`);
});