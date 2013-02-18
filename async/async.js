var delayF = function (v, callback) {
    var waitTime = Math.floor(Math.random() * 1000);
    if (v % 2)
        setTimeout(function () {
            callback(new Error("Odd"));
        }, waitTime);
    else {
        setTimeout(function () {
            callback(null,v*2,waitTime);
        }, waitTime);
    }

}

var resultGenerator = function (err, results, time) {
    if (err)
        console.log('Error ' + err.message);
    else
        console.log("the results are : " + results + ' in '+time);
}


exports.delayF = delayF;
exports.resultGenerator = resultGenerator;