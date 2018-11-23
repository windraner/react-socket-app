const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const { compareSync, genSalt, hash } = require('bcrypt');

const SALT_WORK_FACTOR = 11;

export const encryptPassword = (password) => new Promise((resolve, reject) => {
  genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) {
          return reject(err);
      }
      hash(password, salt, (errHash, hash) => {
          if (errHash) {
              return reject(errHash);
          }
          resolve(hash);
      });
  });
});

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please Supply an email address'
  },
  name: {
    type: String,
    // required: 'Please supply a name',
    trim: true
  },
  updated_at: Date,
  created_at: {
    type: Date,
    default: Date.now
  },
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, {
  versionKey: false
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.updatedAt = Date.now;
  if (user.isModified('password')) {
      user.password = await encryptPassword(user.password);
  }

  return next();
});

userSchema.methods.checkPassword = function (password) {
  return compareSync(password, this.password);
};

userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
      return {
          email: ret.email,
          id: ret._id
      };
  }
});

module.exports = mongoose.model('User', userSchema);
