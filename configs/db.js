const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Rcthapa1996:Kg7yD2OmGuQPupLW@account.2qtupvp.mongodb.net/?retryWrites=true&w=majority";
const { v4: uuidv4 } = require("uuid");

const allData = [
  { id: "1", name: "Ram" },
  { id: "2", name: "JP" },
  { id: "3", name: "Didi" },
  { id: "4", name: "Mummy" },
  { id: "5", name: "Daddy" },
  { id: "6", name: "Dai" },
];

async function connect(url, dbName, collectionName) {
  const client = new MongoClient(url);
  try {
    const database = client.db(dbName);
    const movies = database.collection(collectionName);
    const date = new Date();

    const query = { director: "Christopher Nolan" };
    let movie = await movies.findOne(query);

    const allDataCursor = await movies.find();
    const allData = [];
    await allDataCursor.forEach((data) => allData.push(data));
    console.error("Find Movie:", allData);
    // movies.insertMany( [
    //     { _id: 1, flavor: "chocolate" },
    //     { _id: 2, flavor: "strawberry" },
    //     { _id: 3, flavor: "cherry" }
    //  ] )
    return allData;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

function getCollection(client, dbName, collectionName) {
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  return collection;
}

function getClient(url) {
  return new MongoClient(url);
}

// async function connectDb(url, dbName, collectionName,cb,params) {
//   const client =getClient(url);
//   try {
//     const collection = getCollection(client, dbName, collectionName);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

async function insertDataFromDB(collection, data) {
  const allData = [];

  const result = await collection.insertOne(data);
  console.log(
    `A document was inserted with the _id:::::::::::::::: ${result.insertedId}`
  );

  const allDataCursor = await collection.find();
  await allDataCursor.forEach((data) => allData.push(data));
  return allData;
}

async function getDataFromDB(collection) {
  const allData = [];

  const allDataCursor = await collection.find();
  await allDataCursor.forEach((data) => allData.push(data));
  return allData;
}
async function updateDataFromDB(collection, id, data) {
  const allData = [];
  const allDataCursor = await collection.find();
  await allDataCursor.forEach((data) => allData.push(data));
  return allData;
}
async function deleteDataFromDB(collection, id) {
  const allData = [];
  const allDataCursor = await collection.find();
  await allDataCursor.forEach((data) => allData.push(data));
  return allData;
}

async function addData(data) {
  console.log("Data", data);

  let client = getClient(url);
  let allData = [];
  try {
    const collection = getCollection(client, "AccountDetails", "Account");
    allData = await insertDataFromDB(collection, data);
    console.log("all Data: ", allData);
  } finally {
    await client.close();
  }
  return allData;

  // allData.push({ id: uuidv4(), name: data.name });
  // return { ack: "added", data: allData };
  // // return { ack: "received", id: 12345, ...data };
}

async function getData() {
  console.log("fetching data");
  let client = getClient(url);
  let allData = [];
  try {
    const collection = getCollection(client, "AccountDetails", "Account");
    allData = await getDataFromDB(collection);
    console.log("all Data: ", allData);
  } finally {
    await client.close();
  }
  return allData;
  // return [
  //   { id: 1, name: "Ram" },
  //   { id: 2, name: "JP" },
  // ];
}

async function updateData(id, data) {
  console.log("Received Id for update", id);

  let client = getClient(url);
  let allData = [];
  try {
    const collection = getCollection(client, "AccountDetails", "Account");
    allData = await updateDataFromDB(collection, id, data);
    console.log("all Data: ", allData);
  } finally {
    await client.close();
  }
  return allData;

  // const index = allData.map((d) => d.id).indexOf(id);
  // if (index != -1) {
  //   console.log("Deleted data: ", allData[index]);
  //   allData[index].name = data.name;
  // }
  // return allData;
  // // return { ack: "updated", id: 2, name: "Abhishek" };
}

async function deleteData(id) {
  console.log("Received Id for delete", id);

  let client = getClient(url);
  let allData = [];
  try {
    const collection = getCollection(client, "AccountDetails", "Account");
    allData = await deleteDataFromDB(collection, id);
    console.log("all Data: ", allData);
  } finally {
    await client.close();
  }
  return allData;

  // const index = allData.map((data) => data.id).indexOf(id);
  // if (index != -1) {
  //   console.log("Deleted data: ", allData[index]);
  //   allData.splice(index, 1);
  //   return allData;
  // }
  // return { id: 1, name: "Error" };

  // return { ack: "deleted", id: id };
}

module.exports = {
  addData,
  getData,
  updateData,
  deleteData,
};

async function runNew() {
  const client = new MongoClient(url);
  try {
    const database = client.db("AccountDetails");
    const movies = database.collection("Account");
    const date = new Date();
    // const newMovie = {
    //   title: "New",
    //   date: date,
    //   director: "Christopher Nolan",
    //   year: 2010,
    // };
    // const result = await movies.insertOne(newMovie);
    // const allData = await movies.find({});
    // allData.toArray((err, documents) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }

    //   console.log(documents);
    // });
    // console.log("allData:", allData);
    // console.log("result...", result);
    // console.log(`Inserted ${JSON.stringify(movies)} movie`);
    // const query = { item: "ram" };
    const query = { director: "Christopher Nolan" };
    // const query2 = { name: "Hari" };

    let movie = [];
    // movie = await movies.find({});
    console.log("Called.........................");
    movie = await movies.findOne(query);
    const allDataCursor = await movies.find();
    const allData = [];
    await allDataCursor.forEach((data) => allData.push(data));
    // const movie = await movies.findOne();
    console.error("Find Movie:", allData, allDataCursor);
    // movies.insertMany( [
    //     { _id: 1, flavor: "chocolate" },
    //     { _id: 2, flavor: "strawberry" },
    //     { _id: 3, flavor: "cherry" }
    //  ] )
    return allData;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// async function getAllData() {
//   const client = new MongoClient(url);
//   try {
//     const database = client.db("AccountDetails");
//     const movies = database.collection("sales");
//     const movie = await movies.findOne({});
//     const data = await movies.find().toArray();
//     console.log("Find Movie:", movie, data);
//     // movies.insertMany( [
//     //     { _id: 1, flavor: "chocolate" },
//     //     { _id: 2, flavor: "strawberry" },
//     //     { _id: 3, flavor: "cherry" }
//     //  ] )
//     //   return {id:1,name:"Ram"};
//     return data;
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function getAccountDetails() {
//   const client = new MongoClient(url);
//   try {
//     const database = client.db("AccountDetails");
//     const detailsCollection = database.collection("details");
//     const allDetails = await detailsCollection.find().toArray();
//     console.log("Retrived all Data:", allDetails);
//     return allDetails;
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function postAccountDetails() {
//   const client = new MongoClient(url);
//   try {
//     const database = client.db("AccountDetails");
//     let detailsCollection = database.collection("details");
//     // if(true){
//     if (false) {
//       await detailsCollection.drop();
//       return { status: "reset data" };
//     } else {
//       detailsCollection = database.collection("details");
//       const allDetails = detailsCollection.insertMany(account);
//       console.log("Added all Data:", allDetails);
//       return allDetails;
//     }
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function insertData(payload) {
//   const client = new MongoClient(url);
//   let returnData;
//   try {
//     const database = client.db("AccountDetails");
//     const movies = database.collection("sales");
//     const result = await movies.insertOne(payload);
//     console.log(`Inserted ${JSON.stringify(result)} movie`);
//     returnData = result;
//   } finally {
//     await client.close();
//   }
//   return returnData;
// }

// async function getAllName(payload) {
//   const client = new MongoClient(url);
//   let returnData;
//   try {
//     const database = client.db("AccountDetails");
//     const movies = database.collection("sales");
//     const result = await movies.distinct("name");
//     console.log(`Inserted ${JSON.stringify(result)} movie`);
//     returnData = result;
//   } finally {
//     await client.close();
//   }
//   return returnData;
// }

// module.exports = {
//   // run,
//   runNew,
//   getAllData,
//   insertData,
//   getAllName,
//   getAccountDetails,
//   postAccountDetails,
// };
