const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const deleteUser = async (event, user) => {
  if (user) {
    try {
      user.remove();
      return formatOutput(200, {});
    } catch (e) {
      console.log(e);
    }
    return formatError(500, 'Unexpected error');
  }
  return formatError(404, 'User not found');
};

module.exports = deleteUser;
