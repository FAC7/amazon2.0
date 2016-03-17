// node modules
var tape    = require('wrapping-tape');
var redis   = require('redis');
var client, test  = {};
var dbHelpers;
// env variables
var dbUrl = process.env.REDIS_URL || 'redis://localhost:6379';
var dbNum = process.env.REDIS_TEST_DB  || 16

test = tape({
  setup:function(t){
    client = redis.createClient(dbUrl)
    dbHelpers = require('./../lib/dbHelpers.js')(client);
    client.select(dbNum, function(){
      console.log("connected to database number " + dbNum + 'on url '+dbUrl)
    });
    t.end();
  },
  teardown: function(t){
    client.flushdb();
    client.end();
    t.end();
  }
});

test('testing db Helper getProductById with manual input',function(t){
  t.plan(4);
  client.hmset('h12345','title','test product new! 500kg','price',500,'average-rating',4,function(err,reply){
    t.ok(!err,'no error in manually adding a product to the db');
    dbHelpers.getProductById('h12345', function(err,obj){
      t.equal(typeof obj,'object','reply from getProductById is an object');
      t.equal(obj.title,'test product new! 500kg','product has correct title');
      t.equal(obj.price,"500",'product has correct price');
    });
  });
});
test('testing db Helper addProduct',function(t){
  var testProductObj = {
    "price": 345,
    "vendor":"brand1",
    "imageUrl":"https://img.com",
    "title":"this product is not very descriptive, so you won't find it",
    "description":"give us your moneeeey!!",
    "quantity": 1,
    "productDetails":"{ 'size':'250x140cm', 'weight':'150kg', 'other':'stuff' }",
    "average-rating": 3,
    "reviews":'[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"this product is awesome!","text":"this product sucks!","rating":5,"date":1458218918000}]',
    "categories":'["sports","tech"]'
  };
  dbHelpers.addProduct(testProductObj,function(err,testProductId){
    t.plan(6);
    dbHelpers.getProductById(testProductId,function(err,reply){
      // reply = JSON.parse(reply);
      console.log(reply);
      t.ok( !err,'no error in retrieving product by guid with getProductById');
      t.equal( typeof reply, 'object', 'parsed reply is an object');
      t.equal( typeof reply.id, 'string', 'productid is a string (and not undefined)');
      t.equal( reply.price, '345','product price is correct')
      t.equal( reply.description, 'give us your moneeeey!!','product description is correct');
      t.equal( typeof JSON.parse(reply.reviews), 'object', 'product.reviews is a stringified object');
    })
  })
});
