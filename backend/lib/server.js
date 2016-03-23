'use strict'
// node modules
const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')
const querystring = require('querystring')
// plugins
const payPlugin = require('./payPlugin.js')

// server config
const server = new Hapi.Server()
const port = 4000
// local variables
require('env2')('./../config.env')

server.connection({
  routes: {cors: true},
  port: port
})

// Hapi plugins
const plugins = [
  Inert,
  payPlugin
]

server.register(plugins, (err) => {
  if (err) {
    throw err
  }

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        const path = Path.join(__dirname, '../../frontend/production/index.html')
        console.log(path)
        reply.file(path)
      }
    }, {
      method: 'GET',
      path: '/populateDB',
      handler: (request, reply) => {
        const client = require('./redis.js')
        require('./populateDB/populateDB.js')(client)
        reply.redirect('/')
      }
    }, {
      method: 'GET',
      path: '/amazon.js',
      handler: (request, reply) => {
        const path = Path.join(__dirname, './../../frontend/production/amazon.js')
        reply.file(path)
      }
    }, {
      method: 'GET',
      path: '/getItemsForCarousel',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)
        dbHelpers.getArrayOfProdObjsByCategories(['appliances', 'electric', 'global'])
        .then((hairdryers) => {
          dbHelpers.getArrayOfProdObjsByCategories(['sport', 'garden', 'global'])
          .then((footballs) => {
            dbHelpers.getArrayOfProdObjsByCategories(['technology', 'computers', 'global'])
            .then((laptops) => {
              return reply(JSON.stringify([hairdryers, footballs, laptops]))
            }).catch((err1) => {
              console.log(err1)
            })
          }).catch((err2) => {
            console.log(err2)
          })
        }).catch((err3) => {
          console.log(err3)
        })
      }
    }, {
      method: 'GET',
      path: '/getIndividualItem/{id}',
      handler: (request, reply) => {
        const client = require('./redis.js')
        const dbHelpers = require('./dbHelpers.js')(client)
        dbHelpers.getProductById(request.params.id, (err, response) => {
          if (err) throw Error
          else {
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
        const load = querystring.parse(request.url.search.split('?')[1])
        const arr = []
        arr.push(load.category)
        console.log(load.input, 'LOADINPUT')
        dbHelpers.getSearchResults(arr, load.input, (err, response) => {
          console.log(err, 'ERR')
          console.log(response, 'RESP!!!')
          if (err) console.log('ERR: ', err)
          else {
            console.log(response, 'RESPONSE')
            reply(response)
          }
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
            throw err
          } else {
            reply(response)
          }
        })
      }
    }
  ])
})

module.exports = server
