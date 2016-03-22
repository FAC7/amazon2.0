'use strict'

const stripe = require('stripe')(process.env.STRIPE_API_KEY)

exports.register = (server, options, next) => {
  server.route([{
    method: 'POST',
    path: '/pay',
    config: {
      handler: (request, reply) => {
        stripe.charges.create({
          amount: request.payload.amount,
          currency: request.payload.currency,
          source: request.payload.source, // obtained with Stripe.js
          description: request.payload.description
        }, (err, charge) => {
          if (err) {
            let resp = {
              success: false,
              error: err
            }
            reply(resp)
          } else {
            let resp = {
              success: true,
              error: null
            }
            reply(resp).redirect('/paymentsuccessful')
          }
        })
      }
    }
  }, {
    method: 'POST',
    path: '/paymentsuccessful',
    config: {
      handler: (request, reply) => {
        reply('todo')
      }
    }
  }])
  next()
}

exports.register.attributes = {
  name: 'payPlugin'
}
