const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const getUser = async (event, user) => {
  if (user) {
    return formatOutput(200, user.toFrontend);
  }
  return formatError(404, 'User not found');
};

module.exports = getUser;
