const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', function (req, res) {
    fs.readFile( __dirname + "/public/index.html", 'utf8', function (err, data) {
        res.end( data );
    });
});

const server = app.listen(80, function () {

    const host = '127.0.0.1';//server.address().address;
    const port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});