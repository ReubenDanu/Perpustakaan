const express = require("express")

const router = express.Router()

router.use(function(req, res, next){
    console.log("Time :", Date.now() ,req.method, req.path)
    next()
})

router.get('/home', function(req, res){
    res.send("home")
})

router.get('/about', function(req, res){
    res.send("about")
})

router.get('/book', function(req, res){
    res.send("home")
})

router.get('/book/create', function(req, res){
    res.send("home")
})

router.get('/book:id', function(req, res){
    res.send("home")
})


module.exports = router