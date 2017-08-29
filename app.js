var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');

var connect = mongoose.connect('mongodb://localhost:27017/example');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/bookstore', function(req, res) {
    Book.find((err, data) => {
        if (err) {
            console.log("error")
        } else {
            console.log(data);
            res.json(data);
        }
    });
});


app.post('/bookpost', function(req, res) {

    let BookData = new Book(); 
    BookData.title = req.body.title;
    BookData.author = req.body.author;
    BookData.category = req.body.category;
    BookData.save((err, data) => {

        if (err) {
            console.log('error');
        } else {
            console.log(data);
            res.json(data);
        }
    })
})


app.put('/bookput/:id', function(req, res) {  
  Book.update({_id:req.params.id},
    {$set:
        {title: req.body.title,
        author: req.body.author,
        category: req.body.category}},
        {upsert: true},
        function(err,newBook){
            if(err){
                console.log("error occured");
            } else{
                console.log(newBook);
                res.json(newBook);
            }    }
    );
});


app.delete('/:id',function(req,res){

	Book.remove({_id:req.params.id},function(err,data){

		if(err){
			console.log('error')
		}else{
			res.json(data)
		}
	})

})

app.listen(3000);
module.exports = app;


//var db= 'mongodb://localhost/example';
//mongoose.createConnection(db);

// app.get('/bookStore', function(req, res){
// 	Book.find({})
// 	.exec(function(err, books){										// books can be anything, say result or data any other but we are using books here
// 		if(err){
// 			res.send('error has occured');
// 		} else{
// 			console.log(books);
// 			res.json(books);
// 		}
// 	})
// })

// app.listen(port, function(){
// console.log("listened at" + port);
// })

/*app.post('/books', (req, res)=>{
	var newBook = new book();
	newBook.name = req.body.name;
	newBook.price = req.body.price();

	newBook.save(function(err, book){
		if(err){
			req.send("error")
		}else{
			console.log("book");
			res.send(book);
		}
	})
})

*/

// 	console.log('hey, here i am!')
// })



























/*
//connect to mongoose
mongoose.connect('mongodb://localhost/student');
var db= mongoose.connection;



//======================get method==============================
app.get('/', function(req, res){
	res.send("hello");
})

//=================making static folder================================
app.use(express.static('public'))




//=================creating pug===============================
/*app.set('views', './views');
app.set('view engine', 'pug');*/

/*
app.get('/', function(req, res){
	res.render('index', {title: 'hey', message:'aastha here'})
})*/