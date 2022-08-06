const express = require('express');
const mongoose = require('mongoose')
const {Schema } = mongoose
const app = express();
const connectDb = require('./db/config.js')
const path = require('./routes/routes.js')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public/'))
app.use('/api', path);

connectDb()




app.listen(3000, function(){console.log("App listen At port 3000")})