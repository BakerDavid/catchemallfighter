/*const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, 'src')));
// sendFile will go here
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);*/

const express = require('express');

const app = express();

// serve files from the public directory
app.use(express.static('src'));

// start the express web server listening on 8080
app.listen(8000, () => {
  console.log('listening on 8000');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/attack', (req, res) => {
  res.sendStatus(200)
});

app.post('/reset', (req, res) => {
  res.sendStatus(200)
});