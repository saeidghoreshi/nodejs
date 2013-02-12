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
	});
});

//work with data
// "./" mens local
var repo=require('./data/repo').data;
app.get('/complex',function(req,res)
{
	res.render('complex.ejs',
	{
		repo:repo
	});
});

//Normal Routs

app.get('/datas',function(req,res)
{
	res.send('<b>All Datas</b>');
});

var lib=require('./lib');
app.get('/datas/:title',lib.function1);


app.get('/*',function(req,res)
{
	res.status(404).render('error.ejs',{title:"Fix it"});
});



app.listen(7000);
console.log('running ...');