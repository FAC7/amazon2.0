'use strict'

const stripe = require('stripe')('sk_test_oZSgSdlwFlYGjZVkTDNUneLX')

const makeIdemKey = () => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

exports.register = (server, options, next) => {
  server.route({
    method: 'POST',
    path: '/pay',
    config: {
      handler: (request, reply) => {
        // TODO: check with Elias
        stripe.charges.create({
          amount: request.payload.amount,
          currency: request.payload.currency,
          source: request.payload.token, // obtained with Stripe.js
          description: request.payload.description
        }, {
          idempotency_key: makeIdemKey()
        }, (err, charge) => {
          if (err) {
            let resp = {
              success: false,
              error: err
            }
            reply(JSON.stringify(resp))
          } else {
            let resp = {
              success: true,
              error: null
            }
            reply(charge)

            // TODO:
            // reply(JSON.stringify(resp)).redirect('/paymentsuccessful')
          }
        })
      }
    }
  })
  next()
}

exports.register.attributes = {
  name: 'payPlugin'
}
