'use strict'

const Hapi = require('hapi')

const plugins = [
  require('inert'),
  require('./payPlugin.js')
]

const server = new Hapi.Server()
const port = 4000

server.connection({
  port: port
})

server.register(plugins, (err) => {
  if (err) throw err

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply('hello world')
    }
  })
})

module.exports = server
