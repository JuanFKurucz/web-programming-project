require('./config').start();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

/**
 * Creates a token for an user
 * @param {string} userId
 */
exports.createToken = (userId) => {
  return jwt.sign({ sub: userId }, jwtSecret);
};
