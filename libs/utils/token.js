require('./config').start();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

exports.createToken = (userId) => {
  return jwt.sign({ sub: userId }, jwtSecret);
};
