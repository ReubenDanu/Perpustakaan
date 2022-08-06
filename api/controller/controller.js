var path = require('path')
const Book = require('../model/model.js')

const createBook = function(req, res){
    Book.create(req.body)
        .then(book => res.json({msg: "book created"}))
        .catch(err =>{ 
            console.log(err)
            res.status(400).json({error: 'Unable to add this book'})
        })
    // res.json(req.body)
}

const deleteBook = function(req, res){
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({msg: "Book entry deleted successfully"}))
        .catch(err => res.status(404).json({error: 'no such a book'}))
}

const updateBook = function(req, res){
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Books update successfully'}))
}

const getSingleBook = function(req, res){
    console.log(req.params.title)
    Book.find({title :req.params.title})
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobooksfound: 'No Book found'}))
}

const getAllBook = function(req, res){
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: 'No Books found'}))    
}

const testPost = function(req,res){
    res.sendFile(path.join(__dirname, '../public', 'create.html'))
}


module.exports = {
    createBook,
    deleteBook,
    updateBook,
    getSingleBook,
    getAllBook,
    testPost
}