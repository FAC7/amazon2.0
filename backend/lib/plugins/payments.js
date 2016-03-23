'use strict'

const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const guid = require('guid')
const utils = require('../utils.js')

exports.register = (server, options, next) => {
  server.state('am2_pay_data', {
    ttl: 10 * 60 * 1000, // 10 minutes
    // isSecure: true, // should have isSecure, but don't have HTTPS
    isHttpOnly: false, // accessible from both server-side and client-side
    encoding: 'none', // plain-text cookie
    clearInvalid: true, // instruct browser to clear cookie when invalid
    strictHeader: true
  })

  server.route([{
    method: 'POST',
    path: '/pay',
    config: {
      handler: (request, reply) => {
        var data = []
        try {
          data = JSON.parse(request.payload)
        } catch (e) {
          if (typeof data === 'object') {
            data = request.payload
          } else {
            reply({
              success: false,
              error: e
            }).state('am2_pay_data', '')
          }
        }

        stripe.charges.create({
          amount: data.amount,
          currency: data.currency,
          source: data.source, // obtained with Stripe.js
          description: data.description
        }, (err, charge) => {
          if (err) console.log('Stripe request error: ', err)

          const params = {
            success: !err,
            amount: (!err) ? (charge.amount / 100) : '',
            card_number: (!err) ? charge.source.last4 : '',
            order_number: (!err) ? guid.raw() : '' // spoof an order number
          }

          reply({
            success: !err,
            error: err
          }).state('am2_pay_data', utils.toCookieString(params, '%2C'))
        })
      }
    }
  }])

  next()
}

exports.register.attributes = {
  name: 'payments'
}
