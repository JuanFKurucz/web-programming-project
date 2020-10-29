const endpoint = (options) => ({
  before: (handler, next) => {
    if (!(handler.event.httpMethod in options)) {
      // If we don't have the HTTP method as a defined endpoint
      handler.callback(null, {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Bad request.' }),
      });
      return;
    }
    // We set the endpoint options in the event optionsParameter attribute
    handler.event.optionsParameters = options[handler.event.httpMethod].options; // eslint-disable-line no-param-reassign
    // We create an empty dictionary to store parameters to be used in endpoint methods
    handler.event.decoratedParameters = {}; // eslint-disable-line no-param-reassign
    next();
  },
});

module.exports = endpoint;
