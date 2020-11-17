require('../utils/config').start();

const jwt = require('jsonwebtoken');

const { User } = require('../models/index');
const { formatError } = require('../utils/formatOutput');

const facebookApi = require('../clients/facebook');

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
  const { headers } = event;
  const { authorization } = headers;
  if (!authorization) {
    if (config[event.httpMethod].options.loginRequired) {
      return formatError(401, 'You must be logged in.');
    }
    return handler(event, context, null);
  }

  const [scheme, token] = authorization.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    if (config[event.httpMethod].options.loginRequired) {
      return formatError(
        401,
        `Unsupported authentication scheme: "${scheme}". Supported schemes: "Bearer".`,
      );
    }
    return handler(event, context, null);
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    if (config[event.httpMethod].options.loginRequired) {
      return formatError(401, 'Invalid token.');
    }
    return handler(event, context, null);
  }

  const { sub: userId } = decoded;
  try {
    const user = await User.findById(userId).populate('raffles');
    let fbAuth;
    if (user.accessToken) {
      try {
        fbAuth = await facebookApi.setAccessToken(user.accessToken);
      } catch (e) {
        fbAuth = null;
      }
    }
    return handler(event, context, user, fbAuth);
  } catch (e) {
    if (config[event.httpMethod].options.loginRequired) {
      return formatError(401, 'Invalid token.');
    }
    return handler(event, context, null);
  }
};

module.exports = authentication;
