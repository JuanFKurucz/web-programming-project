const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

/**
 * Gets the information of the current logged user
 * Login is required
 */
const getUser = async (event, user) => {
  if (user) {
    return formatOutput(200, user.toFrontend);
  }
  return formatError(404, 'User not found');
};

module.exports = getUser;
