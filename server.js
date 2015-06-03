var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('User Connecting');
  socket.on('ping', function(data){
    console.log('DATA', data);
    socket.emit('pong', 'PONG')
  });
});

server.listen(port);
console.log('Listening on %s', port);
