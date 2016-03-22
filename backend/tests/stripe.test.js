'use strict'

require('env2')('./../config.env')
const tape = require('tape')
const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const server = require('../lib/server.js')

const stripeTests = (() => {
  tape('server test', (t) => {
    stripe.tokens.create({
      card: {
        number: '4012888888881881',
        exp_month: 12,
        exp_year: 2017,
        cvc: '123'
      }
    }, (err, token) => {
      if (err) {
        console.log(err)
      } else {
        const options = {
          method: 'POST',
          url: '/pay',
          payload: {
            amount: 100,
            currency: 'usd',
            source: token.id,
            description: 'transaction successful'
          }
        }
        server.inject(options, (response) => {
          t.equal(response.statusCode, 200, 'server acknowledges API')
          t.end()
        })
      }
    })
  })

  tape('incorrect currency returns error', (t) => {
    stripe.tokens.create({
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2017,
        cvc: '123'
      }
    }, (err, token) => {
      if (err) {
        console.log(err)
      } else {
        const options = {
          method: 'POST',
          url: '/pay',
          payload: {
            amount: '400',
            currency: 'lasdjflks;da',
            source: token.id,
            description: 'transaction successful'
          }
        }
        server.inject(options, (response) => {
          let payload = JSON.parse(response.payload)
          t.equal(payload.error.raw.statusCode, 400, 'you got an error!')
          t.end()
        })
      }
    })
  })
})()

module.exports = stripeTests
