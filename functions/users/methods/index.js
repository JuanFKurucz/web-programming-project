const getUser = require('./getUser');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');

module.exports = {
  GET: {
    method: getUser,
    options: {
      loginRequired: true,
    },
  },
  POST: {
    method: createUser,
    options: {
      loginRequired: false,
    },
  },
  PATCH: {
    method: updateUser,
    options: {
      loginRequired: true,
    },
  },
  DELETE: {
    method: deleteUser,
    options: {
      loginRequired: true,
    },
  },
};
