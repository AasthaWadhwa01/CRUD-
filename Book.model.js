var mongoose= require('mongoose');	
var Schema= mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	category: String
});

module.exports = mongoose.model('book', BookSchema);	// in shell books(plural) will be created automatically. model => book, collection=> books
