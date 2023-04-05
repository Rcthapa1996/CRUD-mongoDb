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
  addData,
  getData,
  updateData,
  deleteData,
  deleteAllData,
} = require("./configs/db.js");

app.post("/add", async (req, res) => {
  const allDatas = await addData(req.body);
  res.send(allDatas);
  console.log(req.body);
});

app.get("/data", async (req, res) => {
  const allDatas = await getData();
  res.send(allDatas);
  console.log(req.body);
});

app.put("/update", async (req, res) => {
  const { id, data } = req.body;
  const allDatas = await updateData(id, data);
  res.send(allDatas);
  console.log(req.body);
});

app.delete("/delete", async (req, res) => {
  const allDatas = await deleteData(req.body.id);
  res.send(allDatas);
  console.log(req.body);
});

app.delete("/deleteAll", async (req, res) => {
  const allDatas = await deleteAllData(req.body.id);
  res.send(allDatas);
  console.log(req.body);
});

// Account
app.post("/accounts", async (req, res) => {
  const allDatas = await addData(req.body);
  res.send(allDatas);
  console.log(req.body);
});

app.get("/accounts", async (req, res) => {
  const allDatas = await getData();
  res.send(allDatas);
  console.log(req.body);
});

app.get("/accounts/:accountId", async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await getData();
  // const allDatas = { accountId: req.params.accountId };
  console.log("accountId:::::::::::::::::: ", accountId);
  res.send({ data: allDatas, accountId: accountId });

  // const allDatas = await getData();
  // res.send(allDatas);
  console.log(req.body);
});

app.put("//accounts/:accountId", async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await updateData(id, data);
  res.send(allDatas);
  console.log(req.body);
});

app.delete("/accounts/:accountId", async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await deleteData(req.body.id);
  res.send(allDatas);
  console.log(req.body);
});

// Transactions
app.post("/accounts/:accountId/transactions", async (req, res) => {
  const { accountId } = req.params;
  console.log(accountId);
  const allDatas = await addData(req.body);
  res.send(allDatas);
  res.send(accountId);
  console.log(req.body);
});

app.get("/accounts/:accountId/transactions", async (req, res) => {
  const { accountId } = req.params;
  console.log(accountId);
  const allDatas = await getData();
  // res.send(allDatas);
  res.send(accountId);
  console.log(req.body);
});

app.get(
  "/accounts/:accountId/transactions/:transactionId",
  async (req, res) => {
    // const allDatas = await getData();
    const { accountId, transactionId } = req.params;
    console.log(accountId, transactionId);
    // const allDatas = { accountId: accountId };
    console.log("accountId:::::::::::::::::: ", accountId);
    // res.send({ data: allDatas, accountId: accountId });
    res.send({ accountId, transactionId });
    console.log(req.body);
  }
);

app.put(
  "//accounts/:accountId/transactions/:transactionId",
  async (req, res) => {
    const { accountId, transactionId } = req.params;
    const allDatas = await updateData(id, data);
    res.send(allDatas);
    console.log(req.body);
  }
);

app.delete(
  "/accounts/:accountId/transactions/:transactionId",
  async (req, res) => {
    const { accountId, transactionId } = req.params;
    const allDatas = await deleteData(req.body.id);
    res.send(allDatas);
    console.log(req.body);
  }
);

// starting the server
app.listen(3002, () => {
  console.log("listening on port 3002");
});
