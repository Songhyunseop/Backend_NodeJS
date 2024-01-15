const authController = {};
const jwt = require('jsonwebtoken');
require('dotenv').config();

authController.authenticate = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString) throw new Error('invalid Token');

    const token = tokenString.replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
      if (error) throw new Error('invalid Token');
      req.userId = payload._id;
    });

    next();
  } catch (error) {
    res.status(400).json({ status: 'fail', error: error.message });
  }
};

module.exports = authController;
