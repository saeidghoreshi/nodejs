var rl=require('readline');
var prompt=rl.createInterface(process.stdin,process.stdout);
prompt.question('How many ??? ',function(ans)
{
	var msg='';
	if(ans==5)
		msg='entered 5';
	else 
		msg='not entered 5';
		
	console.log(msg);
	
	process.exit();
});