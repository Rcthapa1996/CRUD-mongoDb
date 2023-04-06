const { addData, getData } = require("../configs/db");

const createNewAccount = async (req, res) => {
  const { body } = req;
  const allDatas = await addData(req.body);
  res.send(allDatas);
  console.log(req.body);
};

const getAllAccounts = async (req, res) => {
  console.log("I am here at : getAllAccounts::::::::::::::");
  const allDatas = await getData();
  res.send(allDatas);
  console.log(req.body);
};

const getAccountById = async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await getData();
  // const allDatas = { accountId: req.params.accountId };
  console.log("accountId:::::::::::::::::: ", accountId);
  res.send({ data: allDatas, accountId: accountId });

  // const allDatas = await getData();
  // res.send(allDatas);
  console.log(req.body);
};

const updateAccount = async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await updateData(id, data);
  res.send(allDatas);
  console.log(req.body);
};

const deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  const allDatas = await deleteData(req.body.id);
  res.send(allDatas);
  console.log(req.body);
};

module.exports = {
  createNewAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
};
