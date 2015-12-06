var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog_v')

var PostSchema = {
	title: { type: String, required: true },
	description: { type: String }
}

var Post = mongoose.model('Post', PostSchema)

module.exports = Post