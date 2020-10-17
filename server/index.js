const express = require('express');
const PATH = require('path');

const PUBLIC_FOLDER = PATH.resolve(__dirname, '../public');
const app = express();

app.use('/', express.static(PUBLIC_FOLDER));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(3000, function(err) {
	if(err) {
		console.log(err);
	}
	console.log('listening at port 3000...')
});
