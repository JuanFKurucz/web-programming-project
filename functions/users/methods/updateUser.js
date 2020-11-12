const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const updateUser = async (event, user) => {
  if (user) {
    try {
      const data = JSON.parse(event.body);
      const updateDict = {};
      if ('password' in data) {
        updateDict.password = data.password;
      }
      if ('accessToken' in data) {
        updateDict.accessToken = data.accessToken;
      }
      await user.update(updateDict);
      return formatOutput(200, user.toFrontend);
    } catch (e) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(404, 'User not found');
};

module.exports = updateUser;
