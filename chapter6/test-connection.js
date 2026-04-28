const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:qwer@cluster0.qadai4d.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const adminDB = client.db('test').admin();
    const listDatabases = await adminDB.listDatabases();
    console.log(listDatabases);
    return "OK";
  } finally {
    await client.close();
  }
}
run()
    .then(console.log)
    .catch(console.error);
