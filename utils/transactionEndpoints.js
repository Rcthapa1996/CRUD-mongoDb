const { connect } = require("../configs/db.js");
const {
  insertTransactionFromDB,
  getTransactionFromDB,
  getTransactionByIdFromDB,
  updateTransactionFromDB,
  deleteTransactionFromDB,
  deleteAllTransactionFromDB,
} = require("../configs/transaction");

const createNewTransaction = async (req, res) => {
  const { data } = req.body;
  const response = await connect((collection) =>
    insertTransactionFromDB(collection, data)
  );
  res.send(response);
};

const getAllTransactions = async (req, res) => {
  const response = await connect((collection) =>
    getTransactionFromDB(collection)
  );
  res.send(response);
};

const getTransactionById = async (req, res) => {
  const { id } = req.params;
  const response = await connect((collection) =>
    getTransactionByIdFromDB(collection, id)
  );
  res.send(response);
};

const updateTransaction = async (req, res) => {
  const { TransactionId } = req.params;
  const { data } = req.body;

  const response = await connect((collection) =>
    updateTransactionFromDB(collection, TransactionId, data)
  );
  res.send(response);
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const response = await connect((collection) =>
    deleteTransactionFromDB(collection, id)
  );
  res.send(response);
};

const deleteAllTransaction = async (req, res) => {
  const response = await connect((collection) =>
    deleteAllTransactionFromDB(collection)
  );
  res.send(response);
};

module.exports = {
  createNewTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  deleteAllTransaction,
};
