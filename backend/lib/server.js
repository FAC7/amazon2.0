'use strict'

// node modules
const Hapi = require('hapi')
const Inert = require('inert')

// plugins
const payPlugin = require('./payPlugin.js')

// server config
const server = new Hapi.Server()
const port = 4000

server.connection({
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
