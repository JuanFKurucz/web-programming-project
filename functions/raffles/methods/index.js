const getRaffles = require('./getRaffles');
const createRaffle = require('./createRaffle');

// List of endpoints from users with their respective methods and options
module.exports = {
  GET: {
    method: getRaffles,
    options: {
      loginRequired: true,
    },
  },
  POST: {
    method: createRaffle,
    options: {
      loginRequired: true,
    },
  },
};
