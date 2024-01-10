const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);

const dbUri = process.env.MONGODB_URI_PROD;

mongoose
  .connect(dbUri)
  .then(() => console.log('mongoose Connected!'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log('server is on!');
});
