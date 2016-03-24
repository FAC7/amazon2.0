'use strict'

const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()
const port = 4000

server.connection({
  routes: {cors: true},
  port: port
})

// Hapi plugins
const plugins = [
  require('inert'),
  require('./plugins/payments.js')
]

server.register(plugins, (err) => {
  if (err) {
    throw err
  }

  server.route([
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: { path: '../../frontend/production' }
      }
    }, {
      method: 'GET',
      path: '/populateDB',
      handler: (request, reply) => {
        const client = require('./redis.js')
        client.SINTER('global', (err, reply) => {
          if (err) {
            console.log(err)
          } else if (reply.length === 0) {
            require('./populateDB/populateDB.js')(client)
          }
        })
        reply.redirect('/')
      }
    }, {
      method: 'GET',
      path: '/getItemsForCarousel',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)

        var results = []

        dbHelpers.getArrayOfProdObjsByCategories(['appliances', 'electric', 'global'])
        .then((hairdryers) => {
          results.push(hairdryers)
          return dbHelpers.getArrayOfProdObjsByCategories(['sport', 'garden', 'global'])
        })
        .then((footballs) => {
          results.push(footballs)
          return dbHelpers.getArrayOfProdObjsByCategories(['technology', 'computers', 'global'])
        })
        .then((laptops) => {
          results.push(laptops)
          return reply(JSON.stringify(results))
        }).catch((err) => {
          console.log(err)
        })
      }
    }, {
      method: 'GET',
      path: '/getIndividualItem/{id}',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)
        dbHelpers.getProductById(request.params.id, (err, response) => {
          if (err) {
            console.log('Database error: ', err)
            reply({success: false, error: err})
          } else {
            reply(response)
          }
        })
      }
    },
    {
      method: 'GET',
      path: '/searchrequest',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)
        const arr = [request.query.category]
        dbHelpers.getSearchResults(arr, request.query.input, (response) => {
          reply(response)
        })
      }
    }, {
      method: 'POST',
      path: '/submitReview',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)
        const reviewObj = JSON.parse(request.payload)
        const formattedObj = {
          author: reviewObj.author,
          date: reviewObj.date,
          rating: reviewObj.rating,
          text: reviewObj.text
        }
        console.log(formattedObj)
        dbHelpers.addReview(reviewObj.id, formattedObj, (err, response) => {
          if (err) {
            console.log('Database error: ', err)
            reply({success: false, error: err})
          } else {
            reply(response)
          }
        })
      }
    }
  ])
})

module.exports = server
