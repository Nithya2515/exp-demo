const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write ('Hi Nithya hello');
        res.end();
    }
    if (req.url === 'api/v1') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');