const { v4: uuidv4 } = require("uuid");

async function insertAccountFromDB(collection, data) {
  const id = uuidv4();
  const result = await collection.insertOne({ id, ...data });
  return result;
}

async function getAccountFromDB(collection) {
  const response = await collection.find().toArray();
  return response;
}

async function getAccountByIdFromDB(collection, id) {
  const filter = { id };
  const response = await collection.find(filter).toArray();
  return response;
}

async function updateAccountFromDB(collection, id, data) {
  const filter = { id };
  const response = await collection.replaceOne(filter, data);
  return response;
}

async function deleteAccountFromDB(collection, id) {
  const filter = { id };
  const response = await collection.deleteOne(filter);
  return response;
}

async function deleteAllAccountFromDB(collection) {
  const response = await collection.deleteMany({});
  return response;
}

module.exports = {
  insertAccountFromDB,
  getAccountFromDB,
  getAccountByIdFromDB,
  updateAccountFromDB,
  deleteAccountFromDB,
  deleteAllAccountFromDB,
};
