const http = require('http');

http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/',
    method: 'GET',
}, (req) => {
    req.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    req.end();
}).end();


http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/logs',
    method: 'GET',
}, (req) => {
    req.on('data', (chunk) => {
        console.log(chunk.toString());
    });
}).end();
