// node modules
var tape = require('wrapping-tape')
var redis = require('redis')
var client, test = {}
var dbHelpers
// env variables
var dbUrl = process.env.REDIS_URL || 'redis://localhost:6379'
var dbNum = process.env.REDIS_TEST_DB || 16

test = tape({
  setup: (t) => {
    client = redis.createClient(dbUrl)
    dbHelpers = require('./../lib/dbHelpers.js')(client)
    client.select(dbNum, () => {
      console.log('connected to database number ' + dbNum + 'on url ' + dbUrl)
    })
    t.end()
  },
  teardown: (t) => {
    client.flushdb()
    client.end()
    t.end()
  }
})

var testProductObj = {
  'price': 345,
  'vendor': 'brand1',
  'imageUrl': 'https://img.com',
  'title': "this product is not very descriptive, so you won't find it",
  'description': 'give us your moneeeey!!',
  'quantity': 1,
  'productDetails': "{ 'size':'250x140cm', 'weight':'150kg', 'other':'stuff' }",
  'average-rating': 3,
  'reviews': '[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"this product is awesome!","text":"this product sucks!","rating":5,"date":1458218918000}]',
  'categories': '["sports","tech"]'
}
var testProductObj2 = {
  'price': 200,
  'vendor': 'brand2',
  'imageUrl': 'https://img2.com',
  'title': "expensive stuff, don't buy this.",
  'description': 'ripping you off...',
  'quantity': 2,
  'productDetails': "{ 'size':'250x140cm', 'weight':'150kg', 'other':'stuff' }",
  'average-rating': 1,
  'reviews': '[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"this product is awesome!","text":"this product sucks!","rating":5,"date":1458218918000}]',
  'categories': '["tech"]'
}

var testProductObj3 = {
  'price': 10,
  'vendor': 'brand3',
  'imageUrl': 'https://img3.com',
  'title': "i don't know what this is",
  'description': 'meh...',
  'quantity': 3,
  'productDetails': "{ 'size':'250x140cm', 'weight':'150kg', 'other':'stuff' }",
  'average-rating': 1,
  'reviews': '[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"this product is awesome!","text":"this product sucks!","rating":5,"date":1458218918000}]',
  'categories': '["cars"]'
}

test('testing db Helper getProductById with manual input', (t) => {
  t.plan(4)
  client.hmset('h12345', 'title', 'test product new! 500kg', 'price', 500, 'average-rating', 4, (err, reply) => {
    t.ok(!err, 'no error in manually adding a product to the db')
    dbHelpers.getProductById('h12345', (err, obj) => {
      t.equal(typeof obj, 'object', 'reply from getProductById is an object')
      t.equal(obj.title, 'test product new! 500kg', 'product has correct title')
      t.equal(obj.price, '500', 'product has correct price')
    })
  })
})
test('testing db Helper addProduct', (t) => {
  dbHelpers.addProduct(testProductObj, (err, testProductId) => {
    t.plan(6)
    dbHelpers.getProductById(testProductId, (err, reply) => {
      // reply = JSON.parse(reply)
      console.log(reply)
      t.ok(!err, 'no error in retrieving product by guid with getProductById')
      t.equal(typeof reply, 'object', 'parsed reply is an object')
      t.equal(typeof reply.id, 'string', 'productid is a string (and not undefined)')
      t.equal(reply.price, '345', 'product price is correct')
      t.equal(reply.description, 'give us your moneeeey!!', 'product description is correct')
      t.equal(typeof JSON.parse(reply.reviews), 'object', 'product.reviews is a stringified object')
    })
  })
})
test('testing dbHelper getProductsByCategories', (t) => {
  dbHelpers.addProduct(testProductObj, (err, testProductId) => {
    dbHelpers.addProduct(testProductObj2, (err2, testProductId2) => {
      dbHelpers.addProduct(testProductObj3, (err3, testProductId3) => {
        dbHelpers.getProductsByCategories(['sports'], (err4, sportsReply) => {
          t.plan(13)
          t.ok(sportsReply instanceof Array, 'successfull reply to sports getProductsByCategories is an array')
          t.equal(sportsReply.length, 1, 'one item only found in sports category')
          t.equal(sportsReply[0], testProductId, 'correct product id found in sports category')
        })
        dbHelpers.getProductsByCategories(['tech'], (err5, techReply) => {
          t.ok(techReply instanceof Array, 'successfull reply to tech getProductsByCategories is an array')
          t.equal(techReply.length, 2, 'two items only found in tech category')
          var trythis1 = techReply[0] === testProductId || techReply[0] === testProductId2
          var trythis2 = techReply[1] === testProductId || techReply[1] === testProductId2
          t.ok(trythis1 && trythis2, 'correct product ids found in tech category')
        })
        dbHelpers.getProductsByCategories(['cars'], (err6, carsReply) => {
          t.ok(carsReply instanceof Array, 'successfull reply to cars getProductsByCategories is an array')
          t.equal(carsReply.length, 1, 'one item only found in cars category')
          t.equal(carsReply[0], testProductId3, 'correct product id found in cars category')
        })
        dbHelpers.getProductsByCategories(['sports', 'tech'], (err7, sportsNtechReply) => {
          t.ok(sportsNtechReply instanceof Array, 'successfull reply to sports & tech getProductsByCategories is an array')
          t.equal(sportsNtechReply.length, 1, 'one item only found in both sports & tech categories')
          t.equal(sportsNtechReply[0], testProductId, 'correct product id found in tech category')
        })
        dbHelpers.getProductsByCategories('bluah', (err8, bluahReply) => {
          t.ok(!err8, 'error in retrieving products in unknown category')
        })
      })
    })
  })
})
