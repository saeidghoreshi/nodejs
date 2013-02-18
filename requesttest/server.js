var request=require('request');

//pattern 1
var f1 = function () {
    request('http://www.pluralsight.com', function (error, response, body) {

        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
 }

//pattern 2
var f2 = function () {
    var timer = 0;
    var r = request('http://www.pluralsight.com');

    r.on('data', function (chunk) {
        console.log('>>>Received Chunk # ' + (++timer));

    }).on('end', function () {
        console.log('>>>Done');
    }); 
}

//patern 3  -- writable streaming with piping to the console
var f3 = function () {

    //Pattern 3 Piping
    var request = require('request');
    var s = request('http://pluralsight.com').pipe(process.stdout);
}

//piping to file instead of to console
//pipe is a readable stream  with destination
var f4 = function () {
    var request = require('request');
    var fs = require('fs');
    var zlib = require('zlib');

    //write to file
    request('http://pluralsight.com').pipe(fs.createWriteStream('output.html'));

    //gzip it too
    request('http://pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('output.html.gz'));
    
}


//process std in and out
var f5 = function () {

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', function (chunk) {
        process.stdout.write('DATA >> ' + chunk);
    });

    process.stdin.on('end', function () {
        process.stderr.write('End\n');
    });

    
    console.log('Node is running on processID: ' + process.pid);
}


f5();