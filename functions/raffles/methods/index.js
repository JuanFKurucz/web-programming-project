const getRaffles = require('./getRaffles');
const createRaffle = require('./createRaffle');
const deleteRaffle = require('./deleteRaffle');
const updateRaffle = require('./updateRaffle');

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
  PATCH: {
    method: updateRaffle,
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
