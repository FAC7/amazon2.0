const tape = require('tape')
const stripe = require('stripe')
const https = require('https')
const Hapi = require('hapi')

const stripeTests = () => {
  tape('test test', (t) => {
    t.equal(1,1, 'Success!')
    t.end()
  })

  tape('server test', (t) => {
    const options = {
      method: 'GET',
      url: 'api.stripe.com'
    }
    server.inject(options, (response) => {
      t.equal(reponse.statusCode, 200, 'server acknowledges API')
      t.end()
    })
  })
}()



module.exports = stripeTests;
