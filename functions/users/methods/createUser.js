const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const emailService = require('../../../libs/utils/emails.js');
const { createToken } = require('../../../libs/utils/token.js');

const { User } = require('../../../libs/models/index');

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Creates an user and sends a welcome email if this one is valid.
 * Login is NOT required
 */
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
      if (validateEmail(newUser.email)) {
        emailService(
          newUser.email,
          'Su usuario se ha registrado en la plataforma de sorteos kusilmo',
        );
      }
      const token = createToken(newUser.id);
      return formatOutput(200, { user: newUser.toFrontend, token });
    } catch (error) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(400, 'Missing parameter (username)');
};

module.exports = createUser;
