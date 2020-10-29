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

module.exports = deleteUser;
