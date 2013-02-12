var connect=require('connect');

//serve aasets from public folder
//connect handle mime automatically
//"use" usage is sequential
var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function(req,res)
	{
		if(req.url==='/json')
		{
			var data=
			{
				'name':'saeid',
				'job':'developer'
			};
			res.setHeader('Content-Type','application/json');
			res.end(JSON.stringify(data));
		}
		if(req.url==="/process")
		{
			res.end(req.body.par1+ ' Sent');
			
		}
		else
		{
			res.statusCode=403;
			res.end("Forbidden");
		}
	})
	.listen(5000);


