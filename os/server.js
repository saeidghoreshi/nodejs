var os = require('os');
var toMb = function (f) {
    return Math.round((f/1024/1024)*100)/100;
}


console.log("Host" + os.hostname());
console.log("15 min average : " + os.loadavg()[2]);

console.log("Free Space");
console.log(toMb(os.freemem()));
console.log("Total Space");
console.log(toMb(os.totalmem()));
