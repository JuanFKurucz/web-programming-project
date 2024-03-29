// eslint-disable-next-line
const MongodbMemoryServer = require('mongodb-memory-server').default;
// eslint-disable-next-line
const NodeEnvironment = require('jest-environment-node');

const mongodbMemoryServerOptions = {
  instance: {},
  binary: {
    version: '4.2.9',
  },
  autoStart: false,
};

class MongodbEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);

    this.mongod = new MongodbMemoryServer(mongodbMemoryServerOptions);
  }

  async setup() {
    await super.setup();

    if (!this.mongod.isRunning) {
      await this.mongod.start();
    }

    // eslint-disable-next-line
    this.global.__MONGO_URI__ = await this.mongod.getConnectionString();
    // eslint-disable-next-line
    this.global.__MONGO_DB_NAME__ = await this.mongod.getDbName();
  }

  async teardown() {
    await super.teardown();

    await this.mongod.stop();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongodbEnvironment;
