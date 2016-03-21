'use strict'

const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const guid = require('guid')

exports.register = (server, options, next) => {
  server.state('am2_pay_data', {
    ttl: 1 * 24 * 60 * 60 * 1000,
    // isSecure: true, // should have isSecure, but don't have HTTPS
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: true,
    strictHeader: true
  })

  server.route([{
    method: 'POST',
    path: '/pay',
    config: {
      handler: (request, reply) => {
        const data = JSON.parse(request.payload)
        stripe.charges.create({
          amount: data.amount,
          currency: data.currency,
          source: data.source, // obtained with Stripe.js
          description: data.description
        }, (err, charge) => {
          console.log('err', err)
          console.log('CHARGE', charge)
          reply({
            success: !err,
            error: err
          }).state('am2_pay_data', {
            card_number: charge.last4,
            order_number: (!err) ? guid.raw() : '' // spoof an order number
          })
        })
      }
    }
  }])

  next()
}

exports.register.attributes = {
  name: 'payments'
}
