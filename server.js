console.log('server.js Loading...');

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err){
  console.log('ERROR:', err);
});

// set key/value in redis database 
client.set("myKey", "myValue", function (err, reply){
  if (err) {
    throw error;
  } else {
    console.log('REPLY', reply);

    // read key/value in redis database
    client.get('myKey', function (err, data){
      if (err) {
        throw error;
      } else {
        console.log('DATA', data);
      }
    });

  }
});

app.use(express.static(__dirname + '/public')); // express route for index.html

// socket.io, check for connection, if ping from client 'pong' back to client
io.on('connection', function (socket){
  console.log('User Connecting');
  socket.on('ping', function (data){
    console.log('DATA', data);
    socket.emit('pong', 'PONG')
  });
});

server.listen(port);
console.log('Listening on %s', port);
