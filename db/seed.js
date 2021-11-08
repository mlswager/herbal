const client = require('./client');
const { rebuildDB } = require('./seed_data');

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());