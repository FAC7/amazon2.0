// node modules
var tape = require('wrapping-tape');
var client = {};
// local modules
const dbHelpers = require('./dbHelpers.js')(client);

// env variables
var dbUrl = process.env.REDIS_URL || 'redis://localhost:6379';
var dbNum = process.env.REDIS_TEST_DB  || 16

tape = tape({
  setup:function(t){
    client = redis.createClient(dbUrl)
    client.select(dbNum, function(){
      console.log("connected to database number " + dbNum)
    })
  },
  teardown: function(t){
    client.flushdb();
    client.end();
    server.stop();
    t.end();
  }
});

tape('testing db Helpers',function(t){
  // t.plan(1);
  // client.hset('testproduct',)
  // dbHelpers.addProduct('')
});
