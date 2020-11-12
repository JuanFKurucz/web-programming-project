exports.formatError = (code, message) => {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ error: message }),
  };
};

exports.formatOutput = (code, data) => {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
