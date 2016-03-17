"use strict";

// modules
const Hapi = require('hapi');
const http = require('https');
const server = new Hapi.Server();
const Inert = require('inert');
const port =  8080;
const url = require('url');

// Routes
// const Index = require('/');



// Hapi plugins
const plugins = [
	Inert,
];

server.connection({
    host: 'localhost',
    port: port
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
