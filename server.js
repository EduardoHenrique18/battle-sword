var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/game.html');
});

io.on('connection', function(socket){
  console.log('a user connected ' + socket.id);
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});