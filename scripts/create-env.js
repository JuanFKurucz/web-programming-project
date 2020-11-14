const fs = require('fs');

fs.writeFileSync(
  './env.json',
  JSON.stringify({
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  }),
);
