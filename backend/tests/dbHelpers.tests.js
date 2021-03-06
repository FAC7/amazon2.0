// node modules
var tape = require('wrapping-tape')
var redis = require('redis')
var client = {}
var test = {}
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
    client.end(true)
    t.end()
  }
})

var testProductObj = {
  'price': '345',
  'vendor': 'brand1',
  'imageUrl': 'https://img.com',
  'title': 'this product is not very descriptive, so you won\'t find it',
  'description': 'give us your moneeeey!!',
  'quantity': '1',
  'productDetails': JSON.stringify({size: '250x140cm', weight: '150kg', other: 'stuff'}),
  'averageRating': '3',
  'reviews': JSON.stringify([{author: 'nickname', text: 'this product sucks!', rating: 1, date: 1458218917974}, {author: 'nickname2', text: 'this product is awesome!', rating: 5, date: 1458218918000}]),
  'categories': JSON.stringify(['sports', 'tech'])
}
var testProductObj2 = {
  'price': '200',
  'vendor': 'brand2',
  'imageUrl': 'https://img2.com',
  'title': 'expensive stuff, don\'t buy this.',
  'description': 'ripping you off...',
  'quantity': '2',
  'productDetails': JSON.stringify({size: '250x140cm', weight: '150kg', other: 'stuff'}),
  'averageRating': '1',
  'reviews': JSON.stringify([{author: 'nickname', text: 'this product sucks!', rating: 1, date: 1458218917974}, {author: 'this product is awesome!', text: 'this product sucks!', rating: 5, date: 1458218918000}]),
  'categories': JSON.stringify(['tech'])
}

var testProductObj3 = {
  'price': '10',
  'vendor': 'brand3',
  'imageUrl': 'https://img3.com',
  'title': 'a superfast sportscar running like crazy at 400km/h',
  'description': 'meh...',
  'quantity': '3',
  'productDetails': JSON.stringify({size: '250x140cm', weight: '150kg', other: 'stuff'}),
  'averageRating': '1',
  'reviews': JSON.stringify([{author: 'nickname', text: 'this product sucks!', rating: 1, date: 1458218917974}, {author: 'this product is awesome!', text: 'this product sucks!', rating: 5, date: 1458218918000}]),
  'categories': JSON.stringify(['cars'])
}

test('testing db Helper getProductById with manual input', (t) => {
  t.plan(5)
  client.hmset('h12345', 'title', 'test product new! 500kg', 'price', 500, 'average-rating', 4, (err, reply) => {
    t.ok(!err, 'no error in manually adding a product to the db')
    dbHelpers.getProductById('h12345', (err, obj) => {
      t.ok(!err, 'no error in getting product by id')
      t.equal(typeof obj, 'object', 'reply from getProductById is an object')
      t.equal(obj.title, 'test product new! 500kg', 'product has correct title')
      t.equal(obj.price, '500', 'product has correct price')
    })
  })
})
test('testing db Helper addProduct', (t) => {
  dbHelpers.addProduct(testProductObj, (err, testProductId) => {
    t.plan(7)
    t.ok(!err, 'Assert no error')
    dbHelpers.getProductById(testProductId, (err, reply) => {
      t.ok(!err, 'no error in retrieving product by guid with getProductById')
      t.equal(typeof reply, 'object', 'parsed reply is an object')
      t.equal(typeof reply.id, 'string', 'productid is a string (and not undefined)')
      t.equal(reply.price, '345', 'product price is correct')
      t.equal(reply.description, 'give us your moneeeey!!', 'product description is correct')
      t.equal(typeof JSON.parse(reply.reviews), 'object', 'product.reviews is a stringified object')
    })
  })
})
test('testing dbHelper getProductIdsByCategories', (t) => {
  t.plan(17)
  dbHelpers.addProduct(testProductObj, (err, testProductId) => {
    t.ok(!err, 'no error in adding product with id ' + testProductId)
    dbHelpers.addProduct(testProductObj2, (err2, testProductId2) => {
      t.ok(!err2, 'no error in adding product with id ' + testProductId2)
      dbHelpers.addProduct(testProductObj3, (err3, testProductId3) => {
        t.ok(!err3, 'no error in adding product with id ' + testProductId3)
        dbHelpers.getProductIdsByCategories(['sports'], (err4, sportsReply) => {
          t.ok(!err4, 'no error in retrieving products by category sports')
          t.ok(sportsReply instanceof Array, 'successfull reply to sports getProductsByCategories is an array')
          t.equal(sportsReply.length, 1, 'one item only found in sports category')
          t.equal(sportsReply[0], testProductId, 'correct product id found in sports category')
        })
        dbHelpers.getProductIdsByCategories(['tech'], (err5, techReply) => {
          t.ok(techReply instanceof Array, 'successfull reply to tech getProductIdsByCategories is an array')
          t.equal(techReply.length, 2, 'two items only found in tech category')
          var trythis1 = techReply[0] === testProductId || techReply[0] === testProductId2
          var trythis2 = techReply[1] === testProductId || techReply[1] === testProductId2
          t.ok(trythis1 && trythis2, 'correct product ids found in tech category')
        })
        dbHelpers.getProductIdsByCategories(['cars'], (err6, carsReply) => {
          t.ok(carsReply instanceof Array, 'successfull reply to cars getProductIdsByCategories is an array')
          t.equal(carsReply.length, 1, 'one item only found in cars category')
          t.equal(carsReply[0], testProductId3, 'correct product id found in cars category')
        })
        dbHelpers.getProductIdsByCategories(['sports', 'tech'], (err7, sportsNtechReply) => {
          t.ok(sportsNtechReply instanceof Array, 'successfull reply to sports & tech getProductIdsByCategories is an array')
          t.equal(sportsNtechReply.length, 1, 'one item only found in both sports & tech categories')
          t.equal(sportsNtechReply[0], testProductId, 'correct product id found in tech category')
        })
        dbHelpers.getProductIdsByCategories('bluah', (err8, bluahReply) => {
          t.ok(!err8, 'error in retrieving products in unknown category')
        })
      })
    })
  })
})

var newReviewObj = {author: 'angry buyer', text: 'where\'s my money?', rating: 3, date: 1458218917954}
var newReviewObj2 = {author: 'returning angry buyer', text: 'where\'s my money again?', rating: 2, date: 1458218917984}

test('testing DBHelper getReviewsByProductId', (t) => {
  t.plan(19)
  dbHelpers.addProduct(testProductObj, (err, testProductId) => {
    t.ok(!err, 'no error in adding product ' + testProductId)

    dbHelpers.getReviewsByProductId(testProductId, (err2, reviews) => {
      t.ok(!err2, 'no error in retrieving reviews for product ' + testProductId)
      t.ok(reviews instanceof Array, 'reply is in array format')
      t.equal(reviews.length, 2, 'reviews array has two elements')
      t.ok(reviews[0] instanceof Object && reviews[1] instanceof Object, 'items in reviews array are objects')
      t.equal(reviews[0].author, 'nickname', 'correct nickname for first review')
      t.equal(reviews[0].text, 'this product sucks!', 'correct content for first review')
      t.equal(reviews[1].text, 'this product is awesome!', 'correct content for second review')

      dbHelpers.addReview(testProductId, newReviewObj, (err3, newReview) => {
        t.ok(!err3, 'no error in adding review to product ' + testProductId)
        t.ok(newReview instanceof Object, 'new review is an object')
        t.ok(newReview.author && newReview.text && newReview.rating && newReview.date, 'added review contains the correct fields')

        dbHelpers.addReview(testProductId, newReviewObj2, (err4, newReview2) => {
          t.ok(!err4, 'no error in adding review to product ' + testProductId)
          t.ok(newReview2 instanceof Object, 'new review is an object')
          t.ok(newReview2.author && newReview2.text && newReview2.rating && newReview2.date, 'added review contains the correct fields')

          dbHelpers.getReviewsByProductId(testProductId, (err5, reviews2) => {
            t.ok(!err5, 'no error in retrieving reviews on ' + testProductId)
            t.equal(reviews2.length, 4, '4 reviews, so two reviews added correctly')
            t.ok(reviews2[2] instanceof Object && reviews2[3] instanceof Object, 'added reviews are objects')
          })
          dbHelpers.getProductById(testProductId, (err6, productInfo) => {
            t.ok(!err6, 'no error in retriving info for ' + testProductId)
            t.equal(productInfo.averageRating, '2.75', 'correctly computed average ratings and set product\'s average rating')
          })
        })
      })
    })
  })
})
test('testing dbHelper getArrayOfProdObjsByCategories', (t) => {
  t.plan(8)
  dbHelpers.addProduct(testProductObj).then(
  dbHelpers.addProduct(testProductObj2)).then(
  dbHelpers.addProduct(testProductObj3)).then(() => {
    dbHelpers.getArrayOfProdObjsByCategories(['tech'], (err, reply) => {
      t.ok(!err, 'no error in retrieving the array of product objects from the database call by categories')
      reply.sort((productA, productB) => {
        return (productB.averageRating - productA.averageRating)
      })
      t.deepEqual(reply[0], testProductObj, 'array\'s first item is correct')
      t.deepEqual(reply[1], testProductObj2, 'array\'s second item is correct')
    })
    dbHelpers.getArrayOfProdObjsByCategories(['tech', 'sports'], (err, reply) => {
      t.ok(!err, 'no error in retrieving the array of product objects from the database call by categories')
      reply.sort((productA, productB) => {
        return (productB.averageRating - productA.averageRating)
      })
      t.equal(reply.length, 1, 'reply has only one object')
      t.deepEqual(reply[0], testProductObj, 'array\'s first item is correct')
    })
    dbHelpers.getArrayOfProdObjsByCategories(['tech', 'sports', 'cars'], (err, reply) => {
      t.ok(!err, 'no error in retrieving empty array of product objects from the database call by too many categories')
      t.equal(reply.length, 0, 'empty array when no products are found')
    })
  })
})
test('testing dbHelper getSearchResults', (t) => {
  t.plan(4)
  dbHelpers.addProduct(testProductObj).then(
  dbHelpers.addProduct(testProductObj2)).then(
  dbHelpers.addProduct(testProductObj3)).then(() => {
    dbHelpers.getArrayOfProdObjsByCategories(['tech'])
    .then((resultsByCat) => {
      const results = dbHelpers.filterProductsArrByKeyString(resultsByCat, 'expensive')
      t.ok(results instanceof Array, 'returns an array')
      t.deepEqual(results[0], testProductObj2, 'search result gives correct item in tech category with "expensive" keyword')
    })
    .catch((categoriesErr) => {
      console.log(categoriesErr)
    })
    dbHelpers.getSearchResults(['cars'], 'superfast 400km/h', (searchResults) => {
      t.ok(searchResults instanceof Array, 'getSearchResults returns an array')
      t.deepEqual(searchResults[0], testProductObj3, 'search result works with multi word string')
    })
  })
})
test('testing searchResults with populated DB', (t) => {
  const populateDB = require('./../lib/populateDB/populateDB.js')
  populateDB(client)
  t.plan(2)
  dbHelpers.getSearchResults(['technology'], '500GB pentium toshiba', (laptopResults) => {
    t.ok(laptopResults instanceof Array, 'laptop search for 500GB returns an array')
    t.equal(laptopResults.length, 1, 'laptop search for 500GB returns an array with some results')
  })
})
