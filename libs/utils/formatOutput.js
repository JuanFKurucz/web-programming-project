/**
 * Formats the output message for an error situation
 * @param {number} code HTTP error code
 * @param {*} message message
 */
exports.formatError = (code, message) => {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ error: message }),
  };
};

/**
 * Formats the output message for a valid situation
 * @param {number} code HTTP valid code
 * @param {*} data the rturned data
 */
exports.formatOutput = (code, data) => {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
