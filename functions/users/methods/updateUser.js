const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const updateUser = async (event, user) => {
  if (user) {
    try {
      const data = JSON.parse(event.body);
      await user.update({ password: data.password });
      return formatOutput(200, user.toFrontend);
    } catch (e) {
      console.log(e);
    }
    return formatError(500, 'Unexpected error');
  }
  return formatError(404, 'User not found');
};

module.exports = updateUser;
