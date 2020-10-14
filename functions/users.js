const jwt = require('jsonwebtoken');
const User = require('../libs/models/User');
const { mongodb } = require('../libs/connectors');

const mongodbUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

const getCurrentUser = async (event) => {
  const { headers } = event;
  const { authorization } = headers;

  if (!authorization) {
    return null;
  }

  const [scheme, token] = authorization.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    return null;
  }

  const tokenData = jwt.verify(token, jwtSecret);
  return User.findById(tokenData.sub).exec();
};

const getUser = async (event, user) => {
  if (user) {
    return {
      statusCode: 200,
      body: JSON.stringify(user.toFrontend),
    };
  }
  return {
    statusCode: 401,
    body: '',
  };
};

const createUser = async (event, user = null) => {
  if (user) {
    return {
      statusCode: 405,
      body: '',
    };
  }

  const data = JSON.parse(event.body);
  if ('name' in data) {
    const newUser = new User({
      username: data.name,
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
  if (user) {
    try {
      const data = JSON.parse(event.body);
      await user.update({ password: data.password });
      return {
        statusCode: 200,
        body: JSON.stringify(user.toFrontend),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: '',
      };
    }
  }
  return {
    statusCode: 401,
    body: '',
  };
};

const deleteUser = async (event, user) => {
  if (user) {
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
  }
  return {
    statusCode: 401,
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
  await mongodb(mongodbUri);
  const user = await getCurrentUser(event);
  callback(null, await methods[event.httpMethod](event, user));
};
