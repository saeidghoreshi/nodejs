var http = require('http');

var options =
{
    host: 'cloudcodeclub.com',
    port: 80,
    path: '/',
    method: 'GET'
}

//simple request
var req = http.request(options, function (response) {

    console.log(response.statusCode);
    //response.pipe(process.stdout);
});
req.end();

//get request
http.get(options, function (response) {

    console.log(response.statusCode);
    //response.pipe(process.stdout);
});

