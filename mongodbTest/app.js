const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;

const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('users');

  //   const userData = await users.insertOne({ name: 'Hyunseop', age: 17 });
  //   console.log(userData);

  //   const userList = [
  //     { name: 'Jinseop', age: 22 },
  //     { name: 'HyunJin', age: 33 },
  //   ];
  //   const userListResult = await users.insertMany(userList);
  //   console.log(userListResult);

  //   const findUser = await users.findOne({ name: 'Hyunseop' });
  //   console.log(findUser);

  //   const findAll = await users.find();
  //   console.log(findAll);

  //   const updateUser = await users.updateOne(
  //     { name: 'Hyunseop' },
  //     { $set: { age: 33 } }
  //   );
  //   console.log(updateUser);

  //   const deleteUser = await users.deleteMany({ age: { $gt: 20 } });
  //   console.log(deleteUser);
}

run();
