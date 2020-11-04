const { authentication, db } = require('../../libs/middleware');
const methods = require('./methods');

const usersHandler = async (event, context, user) =>
  methods[event.httpMethod].method(event, user);

exports.handler = db(authentication(methods)(usersHandler));
