'use strict'
// node modules
const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')
// plugins
const payPlugin = require('./payPlugin.js')
// server config
const server = new Hapi.Server()
const port = 4000
// local modules
const client = require('./redis.js')
// local variables
require('env2')('./../../config.env')

server.connection({
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
        const path = Path.join(__dirname, './../../frontend/production/index.html')
        reply.file(path)
      }
    }, {
      method: 'GET',
      path: '/populateDB',
      handler: (request, reply) => {
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
    }
  ])
})

module.exports = server
