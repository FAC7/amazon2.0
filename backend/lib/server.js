'use strict'

const Hapi = require('hapi')

const plugins = [
  require('inert'),
  require('./plugins/payments.js')
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
      reply.file(__dirname + '../../../frontend/production/index.html')
    }
  })
})

module.exports = server
