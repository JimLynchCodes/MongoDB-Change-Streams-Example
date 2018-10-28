const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:4000');

console.log('opening connection...');
ws.on('open', function open() {
	console.log('sending something...');
  	ws.send(JSON.stringify({'name': 'user' + Math.floor(Math.random() * 1000), 'favoriteColor': 'goldenrod'}));
});

ws.on('message', function incoming(data) {
	console.log('got stuff:')
  console.log(data);
});
