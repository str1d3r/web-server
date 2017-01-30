var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware');

// app.use(middleware.requireAuthenication);
app.use(middleware.logger);

// app.get('/', function(req, res) {
// 	res.send('Hello Express!');
// })

app.get('/about', middleware.requireAuthenication, function(req, res) {
	res.send('About Us');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port: ' + PORT);
});
