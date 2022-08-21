const http = require('http');

http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/',
    method: 'GET',
}, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    res.end();
}).end();


http.request({
    hostname: 'localhost',
    port: process.env.port || 5000,
    path: '/logs',
    method: 'GET',
}, (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    // res.end();
}).end();
