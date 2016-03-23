'use strict'

const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const guid = require('guid')

exports.register = (server, options, next) => {
  server.state('am2_pay_data', {
    ttl: 1 * 24 * 60 * 60 * 1000,
    // isSecure: true, // should have isSecure, but don't have HTTPS
    isHttpOnly: false,
    encoding: 'none',
    clearInvalid: true,
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
          if (typeof data === 'object') data = request.payload
          else throw e
        }

        stripe.charges.create({
          amount: data.amount,
          currency: data.currency,
          source: data.source, // obtained with Stripe.js
          description: data.description
        }, (err, charge) => {
          if (err) {
            console.log(err)
          }
          const cookieString = {
            success: !err,
            amount: (!err) ? (charge.amount / 100) : '',
            card_number: (!err) ? charge.source.last4 : '',
            order_number: (!err) ? guid.raw() : '' // spoof an order number
          }
          const stringKeyVal = Object.keys(cookieString).map((el) => {
            return el.toString() + '=' + cookieString[el].toString()
          }).join('%2C')

          reply({
            success: !err,
            error: err
          }).state('am2_pay_data', stringKeyVal)
        })
      }
    }
  }])

  next()
}

exports.register.attributes = {
  name: 'payments'
}
