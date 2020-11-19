const localvars = require('../../env.json');

/**
 * Set the environment variables
 */
exports.start = () => {
  process.env.MONGODB_URI = localvars.MONGODB_URI;
  process.env.JWT_SECRET = localvars.JWT_SECRET;
  process.env.EMAIL_PASSWORD = localvars.EMAIL_PASSWORD;
  process.env.EMAIL_USERNAME = localvars.EMAIL_USERNAME;
};
