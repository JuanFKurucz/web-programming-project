const endpoint = (options) => ({
  before: (handler, next) => {
    if (!(handler.event.httpMethod in options)) {
      handler.callback(null, {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Bad request.' }),
      });
      return;
    }
    handler.event.optionsParameters = options[handler.event.httpMethod].options; // eslint-disable-line no-param-reassign
    handler.event.decoratedParameters = {}; // eslint-disable-line no-param-reassign
    next();
  },
});

module.exports = endpoint;
