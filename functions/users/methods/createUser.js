const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const emailService = require('../../../libs/utils/emails.js');

const User = require('../../../libs/models/User');

const createUser = async (event, user = null) => {
  if (user) {
    return formatError(403, 'A logged user cannot sign up again');
  }

  const data = JSON.parse(event.body);
  if ('username' in data) {
    const newUser = new User({
      username: data.username,
      password: data.password,
      email: data.email,
    });
    try {
      await newUser.save();
      emailService(
        newUser.email,
        'Su usuario se ha registrado en la plataforma de sorteos kusilmo',
      );
      return formatOutput(200, newUser.toFrontend);
    } catch (error) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(400, 'Missing parameter (username)');
};

module.exports = createUser;
