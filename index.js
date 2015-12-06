var http = require('http')
var app = require('./app/express_config')

var port = 4000
var server = http.createServer(app)

server.listen(port, function() {
	console.log('server listening in port: ' + port)
})