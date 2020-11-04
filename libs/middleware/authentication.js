const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { formatError } = require('../utils/formatOutput');

const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return null;
    }

    throw err;
  }
};

const authentication = (config) => (handler) => async (event, context) => {
  if (!config[event.httpMethod].options.loginRequired) {
    return handler(event, context, null);
  }
  const { headers } = event;
  const { authorization } = headers;
  if (!authorization) {
    return formatError(401, 'You must be logged in.');
  }

  const [scheme, token] = authorization.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    return formatError(
      401,
      `Unsupported authentication scheme: "${scheme}". Supported schemes: "Bearer".`,
    );
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return formatError(401, 'Invalid token.');
  }

  const { sub: userId } = decoded;
  try {
    const user = await User.findById(userId);
    return handler(event, context, user);
  } catch (e) {
    return formatError(401, 'Invalid token.');
  }
};

module.exports = authentication;
