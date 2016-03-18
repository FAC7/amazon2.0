const Guid = require('guid')

module.exports = (client) => {
  return {

    addProduct: (productObj, cb) => {
      const productId = Guid.create().value
      productObj.id = productId
      Object.keys(productObj).forEach((key) => {
        const value = typeof productObj[key] === 'object' ?
          JSON.stringify(productObj[key]) : productObj[key]
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
          // console.log('successfully added product ', productId, ' to category ', category)
        })
      })
      cb(null, productId)
    },

    getProductById: (id, cb) => {
      client.hgetall(id, (err, reply) => {
        if (err) {
          console.log(' --> was not able to retrieve info for product with id', id)
          throw err
        }
        console.log('successfully retrieved info for item with id ', id)
        cb(null, reply)
      })
    },

    getProductsByCategories: (categoriesArr, cb) => {
      client.SINTER(...categoriesArr, (err, reply) => {
        if (err) {
          console.log(err)
        }
        cb(null, reply)
      })
    }

  }
}
