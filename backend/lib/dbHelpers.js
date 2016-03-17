const Guid = require('guid');

module.exports = function(client){
  return {
    addProduct: function( productObj ){
      const productId = Guid.create();
      productObj.id   = productId;
      Object.keys( productObj ).forEach( key => {
        const value = typeof productObj[key] === "object" ?
          JSON.stringify( productObj[key] ) : productObj[key]
        client.hset( id, key, value, function(err){
          if(err) {
            console.log('--> was not able to set property ', key, 'to value ', value);
            throw err;
          console.log('successfully set property ', key, 'to value ', value);
          }
        });
      }
      const categoriesArr = JSON.parse( productObj.categories );
      categoriesArr.forEach( category => {
        client.SADD( category, productId, function(err){
          if(err) {
            console.log('was not able to add product ',productId,' to category ',category);
            throw err;
          }
          console.log('successfully added product ',productId,' to category ', category);
        })
      })
    },
    getProductById: function(id){
      client.hgetall( id, function(err, reply){
        if(err){
          console.log(' --> was not able to retrieve info for product with id',id);
          throw err;
        }
        console.log('successfully retrieved info for item with id ', id);
      });
    },
    getProductsByCategories: function(categoriesArr){
      client.SINTER(...categoriesArr);
    }
  }
}
