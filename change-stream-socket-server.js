

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8040 });

// conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
conn = new Mongo("mongodb://localhost:27017/");
db = conn.getDB("demo");
collection = db.stock;

let updateOps = {
	$match: {
		operationType: "update"
	}
};

const changeStreamCursor = collection.watch([updateOps]);
// const changeStreamCursor = collection.watch();

pollStream(changeStreamCursor);

//this function polls a change stream and prints out each change as it comes in
function pollStream(cursor) {
	while (!cursor.isExhausted()) {
		if (cursor.hasNext()) {
			change = cursor.next();
			print(JSON.stringify(change));
		}
	}
	pollStream(cursor);
}

// Broadcast to all.
// wss.broadcast = function broadcast(data) {
// 	wss.clients.forEach(function each(client) {
// 		if (client.readyState === WebSocket.OPEN) {
// 			client.send(data);
// 		}
// 	});
// };

wss.on('connection', function connection(ws) {

	console.log('connection open')
	ws.on('message', function incoming(data) {
		console.log('got a message: ', data)

		data = JSON.parse(data)

		// Broadcast to everyone else.
		wss.clients.forEach(function each(client) {

			client.send('new player joined! Please welcome ' + data.name + '!')
		// 	if (client !== ws && client.readyState === WebSocket.OPEN) {
		// 		client.send(data);
		// 	}
		});
	});
});

console.log('server running, waiting for connections...')


// Open ws connection {
//
//
//   Open mongo changestream connection {
//
//
//       within mongo watch callback, use ws.send() to send the changes to any listening clients,
//       thus updating them in real time.
//
//
//   }
//
//
// }