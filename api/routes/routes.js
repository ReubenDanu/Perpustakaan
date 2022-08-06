const express = require("express")

const router = express.Router()

const controller = require('../controller/controller.js')

router.use(function(req, res, next){
    console.log("Time :", Date.now() ,req.method, req.path)
    next()
})


router.get('/book', controller.getAllBook)
router.get('/book/create/test', controller.testPost)
router.get('/book/:title', controller.getSingleBook)
router.post('/book/create', controller.createBook)
router.put('/book/:id', controller.updateBook)
router.delete('/book/:id', controller.deleteBook)


module.exports = router