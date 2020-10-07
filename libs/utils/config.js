const localvars = require('../../env.json');

exports.start = () => {
  process.env.MONGODB_URI = localvars.MONGODB_URI;
  process.env.JWT_SECRET = localvars.JWT_SECRET;
};
