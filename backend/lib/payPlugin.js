'use strict'

const stripe = require('stripe')('sk_test_oZSgSdlwFlYGjZVkTDNUneLX')

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/pay',
    config: {
      handler: (request, reply) => {
        stripe.tokens.create({
          card: {
            "number": 4012888888881881,
            "exp_month": 12,
            "exp_year": 2017,
            "cvc": '123'
          }
        }, (err, token) => {
            if (err) {
              console.log(err);
            }
            console.log(token);
            stripe.charges.create({
              amount: 400,
              currency: 'usd',
              source: token.id, // obtained with Stripe.js
              description: 'Charge for test@example.com'
            }, {
              idempotency_key: 'sdjgsdkj'
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
                reply(JSON.stringify(resp)).redirect('/paymentsuccessful')
              }
          })
        })
      }
    }
  })
  next()
}

exports.register.attributes = {
  name: 'payPlugin'
}
