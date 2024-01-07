const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_test');

const validator = require('validator');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) throw new Error('This is not Email');
      },
    },
  },
  age: { type: Number },
});

const User = mongoose.model('User', userSchema, 'USER');

const newUser = new User({
  name: 'Hyunseop',
  email: 'manner@naver.com',
  age: 28,
});

newUser.save().then((val) => console.log(val));

// User.find({ name: 'Hyunseop' })
//   .select('age')
//   .then((val) => console.log(val));
