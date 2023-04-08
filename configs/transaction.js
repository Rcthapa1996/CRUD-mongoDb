const { v4: uuidv4 } = require("uuid");

async function insertTransactionFromDB(collection, data) {
  const id = uuidv4();
  const result = await collection.insertOne({ id, ...data });
  return result;
}

async function getTransactionFromDB(collection) {
  const response = await collection.find().toArray();
  return response;
}

async function getTransactionByIdFromDB(collection, id) {
  const filter = { id };
  const response = await collection.find(filter).toArray();
  return response;
}

async function updateTransactionFromDB(collection, id, data) {
  const filter = { id };
  const response = await collection.replaceOne(filter, data);
  return response;
}

async function deleteTransactionFromDB(collection, id) {
  const filter = { id };
  const response = await collection.deleteOne(filter);
  return response;
}

async function deleteAllTransactionFromDB(collection) {
  const response = await collection.deleteMany({});
  return response;
}

module.exports = {
  insertTransactionFromDB,
  getTransactionFromDB,
  getTransactionByIdFromDB,
  updateTransactionFromDB,
  deleteTransactionFromDB,
  deleteAllTransactionFromDB,
};
