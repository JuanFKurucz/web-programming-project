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

module.exports = updateUser;
