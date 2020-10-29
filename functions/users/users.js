const middy = require('@middy/core');

const { authentication, db, endpoint } = require('../../libs/middleware');
const methods = require('./methods');

const usersHandler = async (event) =>
  methods[event.httpMethod].method(event, event.decoratedParameters.user);

exports.handler = middy(usersHandler).use([
  endpoint(methods),
  db(),
  authentication(),
]);
