require('env2')('./../config.env')
const server = require('./server.js')

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
