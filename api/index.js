const express = require('express');

const app = express();

const path = require('./routes/routes.js')

app.use('/api',path)

app.listen(3000, function(){console.log("App listen At port 3000")})