const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:qwer@cluster0.qadai4d.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('connection');

        const collection = client.db('test').collection('person');

        await collection.insertOne({ name: 'Kusuri', age: 16 });
        console.log('add docs');

        const documents = await collection.find({ name: 'Kusuri' }).toArray();
        console.log('find:', documents);

        await collection.updateOne(
            { name: 'Kusuri' }, 
            { $set: { age: 30 } });
        console.log('update docs');

        const updateDocs = await collection.find({ name: 'Kusuri' }).toArray();
        console.log('update docs:', updateDocs);
    
    } catch(err) {
        console.error(err)
    } finally {
        await client.close();
    }
}

main();