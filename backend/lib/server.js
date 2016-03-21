'use strict'

// node modules
const Hapi = require('hapi')
const Inert = require('inert')

// plugins
const payPlugin = require('./payPlugin.js')
const client = require('./redis.js')
const dbHelpers = require('./dbHelpers.js')(client)

// server config
const server = new Hapi.Server()
const port = 4000

server.connection({
	routes: {cors: true},
  port: port
})

// Hapi plugins
const plugins = [
  Inert, payPlugin
]

server.register(plugins, (err) => {
  if (err) {
    throw err
  }
  server.route([{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply('hello world')
    }
  },{
    method: 'GET',
    path: '/getItemsForCarousel',
    handler: function (request, reply) {
			dbHelpers.getProductById('676109a7-ec33-7291-2149-62e398b263b0').then((x) => {
				return reply(JSON.stringify(x))
			})
    }
  }])
})

module.exports = server
