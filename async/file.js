//Sync file operation
var f1 = function () {
    var fs = require('fs');
    if (fs.existsSync('temp')) {
        console.log('dir exists , Renaming');
        if (fs.existsSync('temp/new.txt'))
            fs.unlinkSync('temp/new.txt');
        fs.rmdirSync('temp');
    }

    fs.mkdirSync('temp');
    if (fs.existsSync('temp')) {
        process.chdir('temp');
        fs.writeFileSync('test.txt', 'this is some test Content');
        fs.renameSync('test.txt', 'new.txt');

        console.log('file has size : ' + fs.statSync('new.txt').size + ' b');
        console.log('file Contents : ' + fs.readFileSync('new.txt').toString());
    }
}

//buffering sample
var f2 = function () 
{
    //Buffering
    var b = new Buffer('Hello');
    console.log(b.toString());
    console.log(b.toString('base64'));
    console.log(b.toString('utf8', 0, 3)); 
}

f2();
