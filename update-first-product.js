conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
db = conn.getDB("demo");
collection = db.stock;

var docToInsert = {
	name: "pineapple",
	quantity: 10
};

// function sleepFor(sleepDuration) {
// 	var now = new Date().getTime();
// 	while (new Date().getTime() < now + sleepDuration) {
		/* do nothing */
	// }
// }

function updateFirst() {
	// sleepFor(1000);
	print("updating first...");
	// docToInsert.quantity = 10 + Math.floor(Math.random() * 10);
	res = collection.update({name: 'pineapple'}, {$set: {quantity: Math.floor(Math.random() * 10000)}});
	print(res)
}

// while (true) {
updateFirst();
// }
