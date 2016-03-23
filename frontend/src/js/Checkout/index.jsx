import React from 'react'
import { browserHistory } from 'react-router'
import Input from '../common/input.jsx'
import cookieParser from 'cookieparser'

class CheckoutForm extends React.Component {
  render () {
    return (
      <div>
        <h2>Checkout</h2>
        <h4>Please enter your card details</h4>
        <form id='payment-form' method='POST' onSubmit={clickHandler} formAction='' style={formStyles}>
          <div style={divStyles}>
            <label htmlFor='card-number'>Card Number*:</label>
            <Input
              data-stripe='number'
              type='text'
              placeholder='NNNNNNNNNNNNNNNN'
              width='15em' />
          </div>

          <div style={divStyles}>
            <label>Expiry Date*:
              <Input
                type='text'
                data-stripe='exp-month'
                placeholder='MM'
                width='50px' />
              <Input
                type='text'
                data-stripe='exp-year'
                placeholder='YYYY'
                width='50px' />
            </label>
          </div>

          <div style={divStyles}>
            <label>CVC* (<a href='#'>What is this?</a>):</label>
            <Input
              type='text'
              data-stripe='cvc'
              placeholder='NNN'
              width='40px' />
          </div>

          <span id='payment-errors'></span>

          <Input
            type='submit'
            value='Submit'
            display='block' />
        </form>
      </div>
    )
  }
}

const clickHandler = (e) => {
  e.preventDefault()
  const paymentForm = document.getElementById('payment-form')
  const stripeResponseHandler = (status, response) => {
    const cookie = cookieParser.parse(document.cookie)
    let errors = document.getElementById('payment-errors')

    if (response.error) {
      errors.innerHTML = response.error.message
    } else {
      errors.innerHTML = ''
      const xhr = new XMLHttpRequest() // eslint-disable-line
      xhr.addEventListener('load', (response) => {
        if (response.err) console.log(response.err)
        document.cookie = 'status=' + response.success
        browserHistory.push('/payment-status')
      })

      const request = {
        currency: cookie.currency,
        amount: cookie.price,
        source: response.id
      }
      console.log(request)
      xhr.open('POST', '/pay')
      xhr.send(JSON.stringify(request))
    }
  }
  Stripe.card.createToken(paymentForm, stripeResponseHandler) // eslint-disable-line
}

const formStyles = {
  border: '3px solid #222E3E',
  borderRadius: '5px',
  padding: '0.7em'
}

const divStyles = {
  marginBottom: '1em'
}

export default CheckoutForm
