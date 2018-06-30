var printf = require('printf'),
keyHandler = require('./keyHandler.js'),
config = require('./config.js'),
socket = require('socket.io-client')('http://localhost:8090');
socket.on('connect', function(){
	console.log('Connected to Socket.IO!');
});

socket.on('charup', function(data) {
	switch(data) {
		case 38:
			keyHandler.sendKey("up");
			break;
		case 40:
			keyHandler.sendKey("down");
			break;
		case 37:
			keyHandler.sendKey("left");
			break;
		case 39:
			keyHandler.sendKey("right");
			break;
		default:
			keyHandler.sendKey("up");
			break;
	}
    
	console.log(typeof data);
});

console.log('Connecting...');
