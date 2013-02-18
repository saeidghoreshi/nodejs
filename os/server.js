﻿var os = require('os');
var toMb = function (f) {
    return Math.round((f/1024/1024)*100)/100;
}


console.log("Host" + os.hostname());
console.log("15 min average : " + os.loadavg());

console.log("Free Space");
console.log(toMb(os.freemem()));
console.log("Total Space");
console.log(toMb(os.totalmem()));

console.log("cpus / net / type/ platform / arch / uptime");
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.uptime());
