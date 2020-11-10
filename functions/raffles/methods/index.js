const createRaffle = require('./createRaffle');

// List of endpoints from users with their respective methods and options
module.exports = {
  POST: {
    method: createRaffle,
    options: {
      loginRequired: true,
    },
  },
};
