const { v4: uuidv4 } = require("uuid");

async function insertDataFromDB(collection, data) {
  const id = uuidv4();
  const result = await collection.insertOne({ id, ...data });
  return result;
}

async function getDataFromDB(collection) {
  const response = await collection.find().toArray();
  return { response };
}

async function updateDataFromDB(collection, id, data) {
  const filter = { id };
  const response = await collection.replaceOne(filter, data);
  return response;
}

async function deleteDataFromDB(collection, id) {
  const filter = { id };
  const response = await collection.deleteOne(filter);
  return response;
}

async function deleteAllDataFromDB(collection) {
  const response = await collection.deleteMany({});
  return response;
}

module.exports = {
  insertDataFromDB,
  getDataFromDB,
  updateDataFromDB,
  deleteDataFromDB,
  deleteAllDataFromDB,
};
