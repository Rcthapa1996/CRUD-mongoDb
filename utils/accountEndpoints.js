const { connect } = require("../configs/db.js");
const {
  insertAccountFromDB,
  getAccountFromDB,
  getAccountByIdFromDB,
  updateAccountFromDB,
  deleteAccountFromDB,
  deleteAllAccountFromDB,
} = require("../configs/account");

const createNewAccount = async (req, res) => {
  const { data } = req.body;
  const response = await connect((collection) =>
    insertAccountFromDB(collection, data)
  );
  res.send(response);
};

const getAllAccounts = async (req, res) => {
  const response = await connect((collection) => getAccountFromDB(collection));
  res.send(response);
};

const getAccountById = async (req, res) => {
  const { id } = req.params;
  const response = await connect((collection) =>
    getAccountByIdFromDB(collection, id)
  );
  res.send(response);
};

const updateAccount = async (req, res) => {
  const { accountId } = req.params;
  const { data } = req.body;

  const response = await connect((collection) =>
    updateAccountFromDB(collection, accountId, data)
  );
  res.send(response);
};

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  const response = await connect((collection) =>
    deleteAccountFromDB(collection, id)
  );
  res.send(response);
};

const deleteAllAccount = async (req, res) => {
  const response = await connect((collection) =>
    deleteAllAccountFromDB(collection)
  );
  res.send(response);
};

module.exports = {
  createNewAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
  deleteAllAccount,
};
