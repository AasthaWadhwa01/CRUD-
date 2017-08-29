var express= require('express');
var app= express();

/*app.post('/', function(req, res){
	res.send("request sent by post method");
})*/

/*app.put('/', function(req, res){
	res.send('put method called');
})*/

app.delete('/', function(req, res){
	res.send('delete method called');
})

app.listen(3000, function(){
	console.log('listened');
})