// node modules
const Guid = require('guid')
const Bluebird = require('bluebird')

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
      // console.log('successfully set property ', key, 'to value ', value)
      })
    })
    const categoriesArr = JSON.parse(productObj.categories)
    categoriesArr.forEach((category) => {
      client.SADD(category, productId, (err) => {
        if (err) {
          console.log('was not able to add product ', productId, ' to category ', category)
          throw err
        }
        console.log('successfully added product ', productId, ' to category ', category)
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
      }
      console.log('successfully retrieved info for item with id ', id)
      cb(null, reply)
    })
  }
  this.getProductById = Bluebird.promisify(getProductById)

  const getProductIdsByCategories = (categoriesArr, cb) => {
    client.SINTER(...categoriesArr, (err, reply) => {
      if (err) {
        console.log(err)
      }
      cb(null, reply)
    })
  }
  this.getProductIdsByCategories = Bluebird.promisify(getProductIdsByCategories)

  this.getProductObjsArrByCategories = (categoriesArr, cb) => {
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
              // console.log(productObjsResults)
              cb(null, productObjsResults)
            }
          )
        }
      }
    )
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

      reviews.push(reviewObj)
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

  // this.getProductObjsByKeyString = (productObjsArr, keyString, cb) => {
  //   if(productsArr.length === 0){
  //     productsArr = ['global']
  //   }
  //   var results = []
  //   keyString = utils.removeUnwantedStrings(keyString)
  //   productsArr.forEach( productId => {
  //     this.getProductById(productId, (err,reply)=>{
  //
  //     })
  //   })
  // }

  return this
}
