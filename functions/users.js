const jwt = require('jsonwebtoken');
const User = require('../libs/models/User');

const getUser = async (user) => ({
  statusCode: 200,
  body: JSON.stringify(user.toFrontend),
});

const createUser = async (event) => {
  const data = JSON.parse(event.body);
  if ('name' in data) {
    const newUser = new User(data.name, data.password, data.email);
    try {
      await newUser.save();
      return {
        statusCode: 200,
        body: JSON.stringify(newUser.toFrontend),
      };
    } catch (error) {
      // Ante error responde con cod 500: Internal server error
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

const updateUser = async (event, user) => {
  try {
    const data = JSON.parse(event.body);
    await user.update({ password: data.password });
    return {
      statusCode: 200,
      body: JSON.stringify(user.toFrontend),
    };
  } catch (e) {
    console.log(e);
  }
  return {
    statusCode: 400,
    body: '',
  };
};

const deleteUser = async (event, user) => {
  try {
    user.remove();
    return {
      statusCode: 200,
      body: '',
    };
  } catch (e) {
    console.log(e);
  }
  return {
    statusCode: 400,
    body: '',
  };
};

const methods = {
  GET: getUser,
  POST: createUser,
  PATCH: updateUser,
  DELETE: deleteUser,
};

exports.handler = async (event, context, callback) => {
  console.log(event.path);
  const token = jwt.verify(event.headers.frula);
  const user = User.findById(token.id);
  callback(null, await methods[event.httpMethod](event, user));
};
