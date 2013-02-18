var func1 = function (v, callback) {
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


func1(2, resultGenerator);
func1(5, resultGenerator);
func1(6, resultGenerator);
func1(7, resultGenerator);
func1(10, resultGenerator);


console.log('----   STARTED ------');