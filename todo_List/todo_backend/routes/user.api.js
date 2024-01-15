const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');
const router = express.Router();

// 1. 회원가입 API
router.post('/', userController.createUser);

// 2. 로그인 API
router.post('/login', userController.loginUser);

// 3. 토큰 값 체크 API
router.get('/me', authController.authenticate, userController.getUser);

module.exports = router;
