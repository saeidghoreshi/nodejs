var $ = require('jquery');
var fs = require('fs');
var args = require('optimist').argv;

var file=args._[0];
var html=fs.readFileSync(file,'UTF-8');

$(html).find('p').each(function(index)
{
	var content=$(this).html();
	console.log(index+' - '+content);
});
//test
//node jq.js testfile.html
