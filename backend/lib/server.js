'use strict'


// node modules
const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')

const http = require('https')
const server = new Hapi.Server()
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



// local modules
const redisClient = require('./redis.js');
const dbHelpers		= require('./dbHelpers.js');

// server config
const server = new Hapi.Server();
const port =  8080;

server.connection({
	port: port
});


// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: (request, reply) => {
      reply('hello world');
			// var path = Path.join(__dirname+'../../frontend/public/index.html');
			// reply.file(path);
    }
});


// Start the server
server.start((err) => {

    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})

module.exports = server
