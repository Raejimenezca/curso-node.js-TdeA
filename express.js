var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('<b> Hola </b> <br> <p> mundo </p>')
})
 
app.listen(3000)