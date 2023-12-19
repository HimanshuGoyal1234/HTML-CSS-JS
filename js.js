// Searching for data in mongo db
use harryKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})
// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})

db.items.find({rating: {$gt: 3.5}}, {rating: 1})
db.items.insertMany([{name: "OPPO 15",price: 15000,rating: 2.0,qty:600,sold:50},
{name: "Releme 13pro",price: 20000,rating: 3.0,qty:6040,sold:570},
{name: "Moto 12pro",price: 16000,rating: 2.4,qty:200,sold:530},
])