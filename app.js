var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){

		socket.on('user_id', function(username) {
      socket.username = username;
		 	console.log(socket.username + ' connected to chat');
  	});
	 
		socket.on('chat message', function(msg){
		  console.log('Message Object', msg);
		  io.emit('chat message', msg);
		});

		socket.on('disconnect', function(){
	    console.log('user disconnected');
  	});
});

http.listen(3000, function(){
  console.log('listening on port::3000');
});
    
