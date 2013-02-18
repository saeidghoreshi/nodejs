var async = require('./asyncModule');



async.delayF(2, async.resultGenerator);
async.delayF(5, async.resultGenerator);
async.delayF(6, async.resultGenerator);
async.delayF(7, async.resultGenerator);
async.delayF(10, async.resultGenerator);


console.log('----   STARTED ------');