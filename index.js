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

// starting the server
app.listen(3002, () => {
  console.log("listening on port 3002");
});

// // defining an endpoint to return all ads
// app.get("/", (req, res) => {
//   res.send([{ name: "hello" }]);
// });
// app.get("/callChatGpt", (req, res) => {
//   res.send([{ name: "hello" }]);
// });
// app.get("/account", async (req, res) => {
//   const data = await runNew();
//   console.log("Daaaaaa Retun: ", data);
//   res.send([data]);
// });

// app.post("/", (req, res) => {
//   console.log("req/:", req);
//   res.send("req");
// });

// app.post("/account", (req, res) => {
//   // const newData = { ...req.body, id: account.length + 1 };
//   // account.push(newData);
//   // console.log("req/account:", req, account);
//   // res.send([newData]);
// });

// app.get("/account/name", (req, res) => {
//   // const nameList = account.map(a => a.name);
//   // res.send([nameList]);
// });
