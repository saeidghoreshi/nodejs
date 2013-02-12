var express = require('express');
var app=express();

//ejs Routes

app.get('/',function(req,res)
{
	res.render('index.ejs');
});
app.get('/view1',function(req,res)
{
	res.render('view1.ejs',
	{
		title:"Desktop",
		body:"This a test Body"
	}
	);
});

//Normal Routs

app.get('/datas',function(req,res)
{
	res.send('<b>All Datas</b>');
});
app.get('/datas/:title',function(req,res)
{
	res.send('<b>'+req.params.title+'</b>');
});


app.get('/*',function(req,res)
{
	res.status(404).render('error.ejs',{title:"Fix it"});
});



app.listen(7000);
console.log('running ...');