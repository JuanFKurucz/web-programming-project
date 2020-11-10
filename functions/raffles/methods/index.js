const getRaffles = require('./getRaffles');
const createRaffle = require('./createRaffle');
const deleteRaffle = require('./deleteRaffle');

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
  DELETE: {
    method: deleteRaffle,
    options: {
      loginRequired: true,
    },
  },
};
