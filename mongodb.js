PS C:\Users\LENOVO\Desktop> mongosh

test> show dbs

// Create a database called "contact"

test> use contact

// Create a collection called "contactlist"

contact> db.createCollection("contactlist")

// Insert these documents  in "contactlist" : ...

contact> db.contactlist.insertOne({Last_name: "Ben Lahmer", First_name: "Fares", Email: "fares@gmail.com", age:26})

contact> db.contactlist.insertMany([{Last_name: "Kefi", First_name: "Seif", Email: "kefi@gmail.com", age:15},{Last_name: "Fatnassi", First_name: "Sarra", Email: "sarra.f@gmail.com", age:40},{Last_name: "Ben Yahia", First_name: "Rym", age:4},{Last_name: "Cherif", First_name: "Sami", age:3}])

// show all the objects

contact> db.contactlist.find()

// Display all the information about only one person using his ID.

contact> db.contactlist.findOne({ _id: ObjectId("<id>") })

// Display all the contacts with an age >18.

contact> db.contactlist.find({ age: { $gt: 18 } })

// Display all the contacts with an age>18 and name containing "ah".

contact> db.contactlist.find({ age: { $gt: 18 }, Last_name: {$regex:"ah" }})

// Change the contact's first name from"Kefi Seif" to "Kefi Anis".

contact> db.contactlist.updateOne({ Last_name: "Kefi", firstName: "Seif" }, { $set: { firstName: "Anis" } })

// Delete contacts aged under 5

contact> db.contactlist.deleteMany({ age: { $lt: 5 } })

// bonus: Delete one contact by id

contact> db.contactlist.deleteOne({ _id: ObjectId("<id>") })

// Display all of the contacts list.

contact> db.contactlist.find()
