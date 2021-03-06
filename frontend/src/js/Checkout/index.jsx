import React from 'react'
import Input from '../common/input.jsx'
import cookieParser from 'cookieparser'
require('./Checkout.css')

class CheckoutForm extends React.Component {
  constructor () {
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {
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
          this.props.history.push('/payment-status') // eslint-disable-line
        })
        const request = {
          currency: cookie.currency,
          amount: parseInt(cookie.price, 10),
          source: response.id
        }
        console.log(request)
        xhr.open('POST', '/pay')
        xhr.send(JSON.stringify(request))
      }
    }
    Stripe.card.createToken(paymentForm, stripeResponseHandler) // eslint-disable-line
  }
  render () {
    return (
      <div className='wrapper'>
        <h2>
          Checkout
        </h2>

        <h4>
          Please enter your card details
        </h4>

        <form id='payment-form' method='POST' onSubmit={this.clickHandler} formAction=''>
          <div className='inputGroup'>
            <label htmlFor='card-number'>Card Number*:</label>
            <Input
              data-stripe='number'
              type='text'
              placeholder='NNNNNNNNNNNNNNNN'
              width='15em' />
          </div>

          <div className='inputGroup'>
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

          <div className='inputGroup'>
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

export default CheckoutForm
