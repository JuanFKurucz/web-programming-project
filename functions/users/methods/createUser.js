const User = require('../../../libs/models/User');

const createUser = async (event, user = null) => {
  if (user) {
    return {
      statusCode: 405,
      body: '',
    };
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
      return {
        statusCode: 200,
        body: JSON.stringify(newUser.toFrontend),
      };
    } catch (error) {
      // If there is an error send code 500: Internal server error
      console.log(error);
      return {
        statusCode: 500,
        body: 'Error!',
      };
    }
  }
  return {
    statusCode: 400,
    body: '',
  };
};

module.exports = createUser;
