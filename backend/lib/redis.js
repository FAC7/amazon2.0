// requiring node modules
require('env2')('./../../config.env');

const DB_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const DB_NUM = process.env.REDIS_DB  || 0;
const client = require('redis').createClient(DB_URL);

client.select( DB_NUM , function(){
  console.log('Connected to Redis database num ',DB_NUM,' on ','DB_URL');
});

module.exports = client;
