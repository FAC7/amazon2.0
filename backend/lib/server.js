'use strict'

// modules
const Hapi = require('hapi')
const http = require('https')
const server = new Hapi.Server()
const Inert = require('inert')
const port =  8080
const url = require('url')
const payPlugin = require('./payPlugin.js')

// Routes
// const Index = require('/')


server.connection({
	host: 'localhost',
	port: port
})

// Hapi plugins
const plugins = [
	Inert, payPlugin
]

server.register(plugins, (err)=> {
	if (err) {
		throw err
	}
	server.route({
	    method: 'GET',
	    path:'/',
	    handler: function (request, reply) {

	        return reply('hello world')
	    }
	})
})





// Start the server
server.start((err) => {

    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})

module.exports = server
