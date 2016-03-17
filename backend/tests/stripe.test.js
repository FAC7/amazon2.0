const tape = require('tape')
const stripe = require('stripe')
const https = require('https')
const Hapi = require('hapi')
const server = require('../lib/server.js')
const payPlugin = require('../lib/payPlugin.js')

const stripeTests = () => {
  tape('test test', (t) => {
    t.equal(1,1, 'Success!')
    t.end()
  })

  tape('server test', (t) => {
    const options = {
      method: 'GET',
      url: '/pay'
    }
    server.inject(options, (response) => {
      t.equal(response.statusCode, 200, 'server acknowledges API')
      t.end()
    })
  })
}()



module.exports = stripeTests;
