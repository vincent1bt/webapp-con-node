var express = require('express')
var router = express.Router()
var Post = require('./../models/post')
//INDEX
router.get('/', function(req, res) {
	Post.find(function(err, doc) {
		if (err) return console.log(err)
		res.render('posts', { posts: doc })
	})
})
//CREATE	
router.get('/new', function(req, res) {
	res.render('new')
})

router.post('/', function(req, res) {
	var data = {
		title: req.body.title,
		description: req.body.description
	}
	var post = new Post(data)
	post.save(function(err){
		if(err) return console.log(err)
		res.redirect('/posts')
	})
})
//DELETE
router.delete("/:id", function(req,res) {
	id = req.params.id
	Post.remove({ "_id": id }, function(err) {
		if (err) return console.log(err)
		res.redirect('/posts')
	})
})

//EDIT
router.get("/:id/edit", function(req, res) {
	var id = req.params.id
	Post.findOne({ "_id": id }, function(err, doc) {
		if (err) return console.log(err)
		res.render('edit', { post: doc })
	})
})

router.put("/:id", function(req, res) {
	var id = req.params.id
	var data = {
		title: req.body.title,
		description: req.body.description
	}
	Post.update({ "_id": id }, data, function(){
		res.redirect('/posts')
	})
})

module.exports = router