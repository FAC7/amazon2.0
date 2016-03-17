'use strict'

const tape = require('tape')
const stripe = require('stripe')('sk_test_oZSgSdlwFlYGjZVkTDNUneLX')
const https = require('https')
const Hapi = require('hapi')
const server = require('../lib/server.js')
const payPlugin = require('../lib/payPlugin.js')

const stripeTests = () => {
  tape('test test', (t) => {
    t.equal(1, 1, 'Success!')
    t.end()
  })

  tape('server test', (t) => {
    stripe.tokens.create({
      card: {
        "number": '4242424242424242',
        "exp_month": 12,
        "exp_year": 2017,
        "cvc": '123'
      }

    },{
      idempotency_key: 'ghjvcsdhvk'
    }, (err, token) => {
      console.log('token---->', token.id);
      if (err) {
        console.log(err)
      } else {
        const options = {
          method: 'POST',
          url: '/pay',
          payload: {
            amount: '400',
            currency: 'usd',
            source: token.id,
            description: 'transaction successful'
          }
        }
        server.inject(options, (response) => {
          console.log('response--------->', response.payload);
          t.equal(response.statusCode, 200, 'server acknowledges API')
          t.end()
        })
      }
    })
  })

  tape('incorrect currency returns error', (t) => {
    stripe.tokens.create({
      card: {
        "number": '4242424242424242',
        "exp_month": 12,
        "exp_year": 2017,
        "cvc": '123'
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
          // console.log('payload---------->', payload);
          t.equal(payload.error.raw.statusCode, 400, 'you got an error!')
          t.end()
        })
      }
    })
  })
}()



module.exports = stripeTests;
