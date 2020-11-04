exports.formatError = (errorCode, message) => {
  return {
    statusCode: errorCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ error: message }),
  };
};
