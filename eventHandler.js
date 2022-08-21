const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

const event = new EventEmitter();
const filePath = './logs.txt';

event.on('writeLog', (data) => {
    fs.appendFile(filePath, data, 'utf8',
        function (err) {
            if (err) throw err;
            console.log("Data is appended to file successfully.");
        });
});


module.exports = { event, filePath };