const mongoose = require('mongoose')

const {Schema} = mongoose

//schema book
const bookSchema = new Schema({
  title:  {type: String, required: true},
  isbn: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String},
  published_date:  {type: Date},
  publisher: {type: String},
  update_date: {type: String, default: Date.now},
  
});

const Book = mongoose.model('book', bookSchema)

module.exports = Book;