const express = require('express');
const app = express();

const checkAuth = (req, res, next) => {
  console.log('you have admin permission');
  next();
};

const getUser = (req, res) => {
  res.send('Here is User Info');
};

app.get('/users', checkAuth, getUser);

//listen으로 포트번호 열어줘야 정상 동작
app.listen(5000, () => {
  console.log('Server is on');
});
