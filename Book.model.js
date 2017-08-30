var mongoose= require('mongoose');	
var Schema= mongoose.Schema;

var BookSchema = new Schema({
	title: {type:String, required: true},
	author: String,
	category: String, 
	//required: true;
});

module.exports = mongoose.model('book', BookSchema);	// in shell books(plural) will be created automatically. model => book, collection=> books
