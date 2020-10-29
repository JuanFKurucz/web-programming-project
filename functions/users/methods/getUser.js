const getUser = async (event, user) => {
  if (user) {
    return {
      statusCode: 200,
      body: JSON.stringify(user.toFrontend),
    };
  }
  return {
    statusCode: 401,
    body: 'User not found',
  };
};

module.exports = getUser;
