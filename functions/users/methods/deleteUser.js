const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

/**
 * Deletes the current logged user
 * Login is required
 */
const deleteUser = async (event, user) => {
  if (user) {
    try {
      await user.remove();
      return formatOutput(200, {});
    } catch (e) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(404, 'User not found');
};

module.exports = deleteUser;
