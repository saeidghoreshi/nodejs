var parser=require('node-markdown');
var html=parser.Markdown('using markdown for writing');
console.log(html);

//optimistic module helps to parse command line vars
var argv=require('optimist').argv;
for(var i=0;i<argv.times;i++)
	console.log(argv._[1]+" on loop number "+i);
//node script.js --times 8 echoing XXX


