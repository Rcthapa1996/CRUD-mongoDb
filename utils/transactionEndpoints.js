const createNewTransaction = async (req, res) => {
  const { accountId } = req.params;
  console.log(accountId);
  const allDatas = await addData(req.body);
  res.send(allDatas);
  res.send(accountId);
  console.log(req.body);
};

const getAllTransactions = async (req, res) => {
  const { accountId } = req.params;
  console.log(accountId);
  const allDatas = await getData();
  // res.send(allDatas);
  res.send(accountId);
  console.log(req.body);
};

const getTransactionById = async (req, res) => {
  // const allDatas = await getData();
  const { accountId, transactionId } = req.params;
  console.log(accountId, transactionId);
  // const allDatas = { accountId: accountId };
  console.log("accountId:::::::::::::::::: ", accountId);
  // res.send({ data: allDatas, accountId: accountId });
  res.send({ accountId, transactionId });
  console.log(req.body);
};

const updateTransaction = async (req, res) => {
  const { accountId, transactionId } = req.params;
  const allDatas = await updateData(id, data);
  res.send(allDatas);
  console.log(req.body);
};

const deleteTransaction = async (req, res) => {
  const { accountId, transactionId } = req.params;
  const allDatas = await deleteData(req.body.id);
  res.send(allDatas);
  console.log(req.body);
};

module.exports = {
  createNewTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
