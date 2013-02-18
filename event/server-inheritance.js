var util = require('util'); // global
var eventEmitter = require('events').EventEmitter /*class function*/;

var Resource = function (c) {

    var self = this;

    //make it async to make sure folowing function will run since begining
    process.nextTick(function () {
        var count = 0;
        self.emit('start');
        var t = setInterval(function () {

            self.emit('data', ++count);
            if (count === c) {
                self.emit('end', count);
                clearInterval(t);
            }
        }, 100);
    });

};

util.inherits(Resource, eventEmitter);



var r = new Resource(5);

r.on('start', function () {
    console.log('I have started');
});

r.on('data', function (d) {
    console.log('I have received >> '+d);
});

r.on('end', function (d) {
    console.log('I am done with  >> '+d);
});