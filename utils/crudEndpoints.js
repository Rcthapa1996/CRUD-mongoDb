const { connect } = require("../configs/db.js");
const {
  insertDataFromDB,
  getDataFromDB,
  updateDataFromDB,
  deleteDataFromDB,
  deleteAllDataFromDB,
} = require("../configs/crud.js");

const createData = async (req, res) => {
  const { body } = req;
  const response = await connect((collection) =>
    insertDataFromDB(collection, body)
  );
  res.send(response);
};

const getAllData = async (req, res) => {
  const { body } = req;
  const response = await connect((collection) =>
    getDataFromDB(collection, body)
  );
  res.send(response);
};

const updateData = async (req, res) => {
  const { body } = req;
  const response = await connect((collection) =>
    updateDataFromDB(collection, body)
  );
  res.send(response);
};

const deleteData = async (req, res) => {
  const { body } = req;
  const response = await connect((collection) =>
    deleteDataFromDB(collection, body)
  );
  res.send(response);
};

const deleteAllData = async (req, res) => {
  const { body } = req;
  const response = await connect((collection) =>
    deleteAllDataFromDB(collection, body)
  );
  res.send(response);
};

module.exports = {
  createData,
  getAllData,
  updateData,
  deleteData,
  deleteAllData,
};
