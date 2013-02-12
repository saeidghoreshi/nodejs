var io=require('socket.io');
var connect=require('connect');
var chatter=require('chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chatroom=io.listen(app);

/*
socket provides http://localhost:3000/socket.io/socket.io.js  uri

Note:
node-dev server.js  ???

tests: and the console
socket=io.connect('http://localhost:3000')
after websocket called then have a constatnt conection to the server [gets statefull]
and socket io picks up based on the browser


use package.json
type : node install
*/


chatter.set_sockets(chatroom.sockets);
chatroom.sockets.on('connection',function(socket)
{
	chatter.connect_chatter(
	{
		socket:socket,
		username:socket.id
	});
});
