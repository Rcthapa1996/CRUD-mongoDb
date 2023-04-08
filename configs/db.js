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

async function connect(callback, collectionName) {
  const client = getClient(URL);
  let response = [];
  try {
    const collection = getCollection(
      client,
      CLUSTER,
      collectionName || COLLECTION_NAME
    );
    response = await callback(collection);
  } catch (e) {
    response = { error: e };
  } finally {
    await client.close();
  }
  return response;
}

module.exports = { connect };
