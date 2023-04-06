// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

const {
  createData,
  getAllData,
  updateData,
  deleteData,
  deleteAllData,
} = require("./utils/crudEndpoints");

app.post("/add", createData);

app.get("/data", getAllData);

app.put("/update", updateData);

app.delete("/delete", deleteData);

app.delete("/deleteAll", deleteAllData);

const {
  createNewAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
} = require("./utils/accountEndpoints.js");

// Account
app.post("/accounts", createNewAccount);

app.get("/accounts", getAllAccounts);

app.get("/accounts/:accountId", getAccountById);

app.put("//accounts/:accountId", updateAccount);

app.delete("/accounts/:accountId", deleteAccount);

const {
  createNewTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("./utils/transactionEndpoints");
// Transactions
app.post("/accounts/:accountId/transactions", createNewTransaction);

app.get("/accounts/:accountId/transactions", getAllTransactions);

app.get("/accounts/:accountId/transactions/:transactionId", getTransactionById);

app.put("//accounts/:accountId/transactions/:transactionId", updateTransaction);

app.delete(
  "/accounts/:accountId/transactions/:transactionId",
  deleteTransaction
);

// starting the server
app.listen(3002, () => {
  console.log("listening on port 3002");
});
