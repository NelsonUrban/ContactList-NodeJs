const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'ContactList';
const ObjectID = require('mongodb').ObjectID;
const client = new MongoClient(url);
const collection = 'Contact';

class contact {

    constructor() {
        this.init()

    }
    async init() {
        await client.connect();
    }
    async create(contact) {
        try {

            client.db(dbName).collection(collection).insertOne(contact)


        }
        catch (err) {
            throw err;
        }
    }

    async getAll() {
        try {

            const contact = await client.db(dbName).collection(collection).find().toArray();

            return contact;
        }
        catch (err) {
            throw err;
        }
    }
    async getById(id) {

        try {

            const contact = await client.db(dbName).collection(collection).findOne({ "_id": new ObjectID(id)});

            return contact;

        } catch (err) {
            throw err;

        }
    }

    async Update(id, contact)
    {
        try
        {
            const updated = await client.db(dbName).collection(collection).updateOne( {"_id": new ObjectID(id)},{$set : contact})
            return updated;
        } 
        catch (err)
        {
            throw err;
        }
        
    }
    async Delete(id)
    {
        try 
        {
            const deleted = await client.db(dbName).collection(collection).deleteOne({"_id": new ObjectID(id)})
            return deleted;
        } 
        catch (err) 
        {
            throw err;
            
        }
    }

}


module.exports = contact;

