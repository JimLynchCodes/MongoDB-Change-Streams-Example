
// const Mongo = require('mongodb').MongoClient
// conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
// db = conn.get("demo");
// collection = db.stock;
//
// const changeStreamCursor = collection.watch();
//
// pollStream(changeStreamCursor);
//
// //this function polls a change stream and prints out each change as it comes in
// function pollStream(cursor) {
//   while (!cursor.isExhausted()) {
//     if (cursor.hasNext()) {
//       change = cursor.next();
//       print(JSON.stringify(change));
//     }
//   }
//   pollStream(cursor);
// }



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'demo';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db('demo');

	const changeStreamCursor = db.collection('stock').watch();

	// db.collection('stock').watch()

	pollStream(changeStreamCursor);

	//this function polls a change stream and prints out each change as it comes in
	// function pollStream(cursor) {
	//
	// 	// console.log('cursor: ', cursor.cursor.cursorState.killed)
	// 	// console.log('cursor: ', cursor.pipeline)
	// 	// console.log('cursor: ', cursor.topology.cursorState)
	// 	// console.log('cursor: ', cursor.cursorState)
	// 	// console.log('cursor: ', cursor.cursor.ns)
	//   while (cursor) {
	// 	if (cursor.hasNext()) {
	// 	  change = cursor.next();
	//
	// 	  if (JSON.stringify(change) !== '{}') {
	// 	  }
	// 	  	// console.log('something happened! ', change)
	//
	// 	  console.log(JSON.stringify(change));
	//
	function pollStream(cursor) {
	while (!cursor.isExhausted()) {
		if (cursor.hasNext()) {
			change = cursor.next();
			print(JSON.stringify(change));
		}
	}
	pollStream(cursor);
}
	//
	// 	}
	//   }
	//   pollStream(cursor);
	// }

	// client.close();
});

// conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
// db = conn.getDB("demo");
// collection = db.stock;
//
// const changeStreamCursor = collection.watch();
//
// pollStream(changeStreamCursor);
//
// //this function polls a change stream and prints out each change as it comes in
//