const { MongoClient } = require("mongodb");
const { URL, CLUSTER, COLLECTION_NAME } = require("./constants");

function getCollection(client, dbName, collectionName) {
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  return collection;
}

function getClient(URL) {
  return new MongoClient(URL);
}

async function connect(callback) {
  const client = getClient(URL);
  try {
    const collection = getCollection(client, CLUSTER, COLLECTION_NAME);
    const data = await callback(collection);
    await client.close();
    return data;
  } finally {
    await client.close();
  }
}

module.exports = { connect };
