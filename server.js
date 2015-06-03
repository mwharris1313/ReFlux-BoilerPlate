var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

app.use(express.static(__dirname + '/public'));

server.listen(port);
console.log('Listening on %s', port);
