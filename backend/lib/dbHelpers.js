'use strict'
// node modules
const Guid = require('guid')
const Bluebird = require('bluebird')

// local modules
const utils = require('./utils.js')

module.exports = (client) => {
  const addProduct = (productObj, cb) => {
    const productId = Guid.create().value
    productObj.id = productId
    Object.keys(productObj).forEach((key) => {
      const value = typeof productObj[key] === 'object'
        ? JSON.stringify(productObj[key]) : productObj[key]
      client.hset(productId, key, value, (err) => {
        if (err) {
          console.log('--> was not able to set property ', key, 'to value ', value)
          throw err
        }
      })
    })
    const categoriesArr = JSON.parse(productObj.categories)
    categoriesArr.forEach((category) => {
      client.SADD(category, productId, (err) => {
        if (err) {
          console.log('was not able to add product ', productId, ' to category ', category)
          throw err
        }
      })
    })
    cb(null, productId)
  }
  this.addProduct = Bluebird.promisify(addProduct)

  const getProductById = (id, cb) => {
    client.hgetall(id, (err, reply) => {
      if (err) {
        console.log(' --> was not able to retrieve info for product with id', id)
        throw err
      } else {
        console.log('successfully retrieved info for item with id ', id)
        cb(null, reply)
      }
    })
  }
  this.getProductById = Bluebird.promisify(getProductById)

  const getProductIdsByCategories = (categoriesArr, cb) => {
    client.SINTER(...categoriesArr, (err, reply) => {
      if (err) {
        console.log(err)
      } else {
        cb(null, reply)
      }
    })
  }
  this.getProductIdsByCategories = Bluebird.promisify(getProductIdsByCategories)

  const getArrayOfProdObjsByCategories = (categoriesArr, cb) => {
    this.getProductIdsByCategories(categoriesArr).then(
      (productIdsArr) => {
        if (productIdsArr.length === 0) {
          cb(null, productIdsArr)
        } else {
          var productObjsPromises = productIdsArr.map((productId) => {
            return this.getProductById(productId)
          })
          // console.log(productObjsPromises)
          Bluebird.all(productObjsPromises).then(
            (productObjsResults) => {
              cb(null, productObjsResults)
            }
          )
        }
      }
    )
  }
  this.getArrayOfProdObjsByCategories = Bluebird.promisify(getArrayOfProdObjsByCategories)

  this.filterProductsArrByKeyString = (productObjsArr, keyString) => {
    if (productObjsArr.length === 0) {
      productObjsArr = ['global']
    }
    keyString = utils.removeUnwantedStrings(keyString)
    const results = productObjsArr.filter((productObj) => {
      let check = true
      keyString.split(' ').forEach((keyWord) => {
        let re = new RegExp(keyWord, 'i')
        if (check && !productObj.title.match(re)) {
          check = false
        }
      })
      return check
    })
    return results
  }
  this.getSearchResults = (categoriesArr, keyString, cb) => {
    this.getArrayOfProdObjsByCategories(categoriesArr)
    .then((resultsByCat) => {
      cb(this.filterProductsArrByKeyString(resultsByCat, keyString))
    })
    .catch((categoriesErr) => {
      cb(categoriesErr)
    })
  }
  this.getReviewsByProductId = (id, cb) => {
    client.hget(id, 'reviews', (err, reply) => {
      if (err) {
        console.log(err)
      }
      cb(null, JSON.parse(reply))
    })
  }
  this.addReview = (productId, reviewObj, cb) => {
    this.getReviewsByProductId(productId, (err, reviews) => {
      if (err) return cb(err)
      reviews.unshift(reviewObj)
      var avgRating = reviews.reduce((accum, review) => {
        return accum + Number(review.rating)
      }, 0) / reviews.length
      client.hmset(productId,
        'reviews', JSON.stringify(reviews),
        'averageRating', avgRating,
        (err, reply) => {
          if (err) {
            console.log(err)
          }
          cb(null, reviewObj)
        }
      )
    })
  }
  return this
}
