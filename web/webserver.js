

var fs = require('fs');
var http = require('http');

http.createServer(function (req, resp) {

    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    
    if (req.url === '/file.txt')
        fs.createReadStream(__dirname + '/samplefile.txt').pipe(resp);
    else
        resp.end('Hello World');
}).listen(8080);

console.log('http server is running on 8080');
