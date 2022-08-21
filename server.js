const fs = require('fs');
const http = require('http');
const { event, filePath } = require('./eventHandler');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const data = '\n' + JSON.stringify({ url: url, method: method, date: new Date(Date.now()).toUTCString() });
    event.emit('count', data);

    if (url == '/logs') {
        let readerStream = fs.createReadStream(filePath);
        let data = '';

        readerStream.on('data', function (chunk) {
            data += chunk;
        });

        readerStream.on('end', function () {
            res.write(data);
            res.end();
        });

        readerStream.on('error', function (err) {
            console.log(err.stack);
        });
    }
});

const port = process.env.port || 5000;

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});