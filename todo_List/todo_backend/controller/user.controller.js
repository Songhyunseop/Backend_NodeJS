const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await User.findOne({ email });

    if (user) throw new Error('이미 가입된 사용자입니다');

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({ email, name, password: hash });

    await newUser.save();

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 'fail', error: error.message });
  }
};

userController.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, '-__v');

    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);

      if (isMatch) {
        const token = user.generateToken();
        return res.status(200).json({ status: 'success', user, token });
      }
    }

    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다');
  } catch (error) {
    res.status(400).json({ status: 'fail', error: error.message });
  }
};

userController.getUser = async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);
    if (!user) throw new Error('Can not find user');

    res.status(200).json({ status: 'success', user });
  } catch (error) {
    res.status(400).json({ status: 'fail', error: error.message });
  }
};

module.exports = userController;
