var http = require('http');
var fs = require('fs');


// Basic Server
/*
var server = http.createServer(function(req, res) {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<h1>Hello World</h1>');
        res.end();

});
server.listen(3000);
*/

// Using a html file for content
var server = http.createServer(function(req, res) {

    fs.readFile('index.html', 'utf-8', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });

});
server.listen(3000);
