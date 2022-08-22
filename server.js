const http = require('http');
const fs = require('fs');
const { event, filePath } = require('./eventHandler');
const port = process.env.port || 5000;

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const data = '\n' + JSON.stringify({ url: url, method: method, date: new Date(Date.now()).toUTCString() });
    event.emit('writeLog', data);

    if (url == '/logs') {
        const reader = fs.createReadStream(filePath);
        let data = '';

        reader.on('data', function (chunk) {
            data += chunk;
        });

        reader.on('end', function () {
            res.write(JSON.stringify({ status: 200, message: data }));
            res.end();
        });

        reader.on('error', function (err) {
            console.log(err.stack);
        });
    }
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});