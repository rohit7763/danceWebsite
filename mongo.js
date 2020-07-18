db.items.insertMany([{name:"honor playX",price:"20000",stock:"5000",ratings:"4.0",sold:"3500"},{name:"samsung galaxy z3",price:"30000",stock:"7000",ratings:"4.5",sold:"5500"}])
db.items.insertMany([{"name":"redmi k20","price":"31000","stock":"4000","ratings":"4.7","sold":"1500"},{"name":"realme 3","price":"18000","stock":"6000","ratings":"4.8","sold":"5000"}])

db.items.find({rating:4.8})
db.items.deleteMany({rating:4.8})
db.items.find({ratings: {$gte:4.5}})
db.items.find({ratings: {$lt: 4.7},price: {$gt: 20000}})
db.items.find({$or:[{ratings: {$gt: 3.5}},{price: {$lt: 30000}}]})
db.items.find({ratings: 3.7},{rating:1,stock:1})//it will show only ratings and stock parameter of item having ratings of 3.7
