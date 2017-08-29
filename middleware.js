var express= require('express');
var app= express();

/*var mylogger= function(req, res, next){
	console.log('logged in');
	next();
} 

app.use(mylogger);

app.get('/', function(req, res){
	res.send("hey");
})

app.listen(3000);
*/

//======================================================Another example===============================================================
/*app.use('/user', function(req, res, next){
	console.log('Request URL', req.orignalUrl)
	next();
}, function(req, res, next){
	console.log('Request Type:', req.method)
	next();
})

app.get('/user/id', function(req, res){
	res.send("hey i am userid");
})*/

//===================================================== PUG============================================================

app.get('/', function(req, res){
	res.render('index', {title: 'hey', message:'aastha here'})
})

app.listen(3000);