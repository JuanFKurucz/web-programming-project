const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const saltWorkFactor = 10;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  accessToken: { type: String, required: false, default: null },
  raffles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Raffle',
    },
  ],
});

userSchema.virtual('toFrontend').get(function () {
  return {
    username: this.username,
    email: this.email,
    hasAccessToken: this.accessToken && this.accessToken.length,
  };
});
/**
 * Compare the given plain-text password with the user's password.
 *
 * @param {string} password A plain-text password.
 *
 * @return {boolean} Whether the password matches or not.
 */
userSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compare(password, this.password);
};

/**
 * Hash the user's password.
 */
async function hashPassword() {
  const user = this;

  if (!user.password || !user.isModified('password')) {
    return;
  }

  const salt = await bcrypt.genSalt(saltWorkFactor);
  user.password = await bcrypt.hash(user.password, salt);
}
userSchema.pre('save', hashPassword);

const User = mongoose.model('User', userSchema);

module.exports = User;
