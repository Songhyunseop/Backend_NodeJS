const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();
app.use(bodyParser.json());
app.use('/api', indexRouter);

const dbUri = 'mongodb://localhost:27017/toDo3';

mongoose
  .connect(dbUri)
  .then(() => console.log('mongoose Connected!'))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log('server is on!');
});
