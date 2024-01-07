const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function testRun() {
  const database = client.db('testDB');
  const inventory = database.collection('inventory');

  // 1. insertOne
  // const dataResult1 = await inventory.insertOne({
  //   item: 'canvas',
  //   qty: 100,
  //   tags: ['cotton'],
  //   size: { h: 28, w: 35.5, uom: 'cm' },
  // });

  // 2. insertMany
  // const dataResult2 = await inventory.insertMany([
  //   {
  //     item: 'journal',
  //     qty: 25,
  //     tags: ['blank', 'red'],
  //     size: { h: 14, w: 21, uom: 'cm' },
  //   },
  //   {
  //     item: 'mat',
  //     qty: 85,
  //     tags: ['gray'],
  //     size: { h: 27.9, w: 35.5, uom: 'cm' },
  //   },
  //   {
  //     item: 'mousepad',
  //     qty: 25,
  //     tags: ['gel', 'blue'],
  //     size: { h: 19, w: 22.85, uom: 'cm' },
  //   },
  // ]);

  // 3. find 문제
  // const dataResult3 = inventory.insertMany([
  //   {
  //     item: 'journal',
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: 'cm' },
  //     status: 'A',
  //   },
  //   {
  //     item: 'notebook',
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'A',
  //   },
  //   {
  //     item: 'paper',
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'D',
  //   },
  //   {
  //     item: 'planner',
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: 'cm' },
  //     status: 'D',
  //   },
  //   {
  //     item: 'postcard',
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: 'cm' },
  //     status: 'A',
  //   },
  // ]);

  // 4. find 문제
  // const dataResult4 = await inventory.find({ status: 'D' }).toArray();

  // 5. find 문제
  // const dataResult5 = await inventory.find({ status: 'A', qty: 50 }).toArray();

  // 6. 쿼리 $in 문제
  // const dataResult6 = await inventory
  //   .find({ status: { $in: ['A', 'D'] } })
  //   .toArray();

  // 7. $lt 문제
  // const dataResult7 = await inventory
  //   .find({ status: 'A', qty: { $lt: 30 } })
  //   .toArray();

  // 8. $or 문제
  // const dataResult8 = await inventory
  //   .find({
  //     $or: [{ status: 'A' }, { qty: { $lt: 30 } }],
  //   })
  //   .toArray();

  // 9. nested field 문재
  // const dataResult9 = await inventory.find({ 'size.uom': 'in' }).toArray();

  // 10. 초과값 문제
  // const dataResult10 = await inventory
  //   .find({ 'size.h': { $gt: 10 } })
  //   .toArray();
}

testRun();
