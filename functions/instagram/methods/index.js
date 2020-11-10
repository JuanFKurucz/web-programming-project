const getPosts = require('./getPosts');

// List of endpoints from users with their respective methods and options
module.exports = {
  GET: {
    method: getPosts,
    options: {
      loginRequired: true,
    },
  },
};
