'use strict'
// node modules
const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')
// plugins
const payPlugin = require('./payPlugin.js')
const client = require('./redis.js')
const dbHelpers = require('./dbHelpers.js')(client)

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
	    handler: function (request, reply) {
				dbHelpers.getArrayOfProdObjsByCategories(['technology']).then((x) => {
					return reply(JSON.stringify(x))
				}).catch((y)=>{console.log(y)})
	    }
	  }
  ])
})

module.exports = server
