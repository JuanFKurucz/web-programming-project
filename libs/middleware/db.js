require('../utils/config').start();

const { mongodb } = require('../connectors');
const { formatError } = require('../utils/formatOutput');

const mongodbUri = process.env.MONGODB_URI;

let cachedConnection = null;

const db = (handler) => async (event, context) => {
  // Allow AWS Lambda to reuse cached DB connection between function invocations.
  context.callbackWaitsForEmptyEventLoop = false; // eslint-disable-line no-param-reassign
  if (cachedConnection === null) {
    try {
      const connection = await mongodb(mongodbUri);
      cachedConnection = connection;
      return handler(event, context);
    } catch (e) {
      return formatError(500, 'Unkown error.');
    }
  }
  return handler(event, context);
};

module.exports = db;
