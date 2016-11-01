var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var posts = require('./controllers/posts_controller')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("views", "app/views")
app.set('view engine', 'pug')
app.use(express.static('app/public'))
app.use(methodOverride("_method"))

app.get("/", function(req, res) {
	res.render("index")
})

app.use('/posts', posts)

module.exports = app
