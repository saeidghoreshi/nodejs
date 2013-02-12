var repo=require('./data/repo').data;

exports.function1=function(req,res)
{
	//do filterring
	var data=repo.filter(function(entry)
	{
		return (entry.name === req.params.title);
	});
	if(data.length!==0)
		res.send('<b>'+req.params.title+'</b>');
	else 
		res.send('<b>Not Found</b>');
}