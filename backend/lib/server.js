'use strict'
// node modules
const Hapi = require('hapi')
const Inert = require('inert')

// plugins
const payPlugin = require('./payPlugin.js')

// local modules
// const redisClient = require('./redis.js')
// const dbHelpers		= require('./dbHelpers.js')
// Routes
// const Index = require('/')

// server config
const server = new Hapi.Server()
const port = 8080

server.connection({
	host: 'localhost',
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
	server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply('hello world')
    }
	})
})

module.exports = server
