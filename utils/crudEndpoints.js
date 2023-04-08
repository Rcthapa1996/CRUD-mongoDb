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
  const response = await connect(
    (collection) => insertDataFromDB(collection, body),
    "Data"
  );
  res.cookie("username", body.name || "JohnDoe", {
    maxAge: 900000,
    httpOnly: true,
  });
  res.status(202);
  res.send({ response, cookie: "Cookies Set" });
};

const getAllData = async (req, res) => {
  const { body } = req;
  const response = await connect(
    (collection) => getDataFromDB(collection, body),
    "Data"
  );
  const userName = req.cookies.username;
  res.send({ response, userName });
};

const updateData = async (req, res) => {
  const { body } = req;
  const response = await connect(
    (collection) => updateDataFromDB(collection, body),
    "Data"
  );
  res.send(response);
};

const deleteData = async (req, res) => {
  const { body } = req;
  const response = await connect(
    (collection) => deleteDataFromDB(collection, body),
    "Data"
  );
  res.send(response);
};

const deleteAllData = async (req, res) => {
  const { body } = req;
  const response = await connect(
    (collection) => deleteAllDataFromDB(collection, body),
    "Data"
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
