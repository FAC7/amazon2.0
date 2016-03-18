import React from 'react'
import Input from '../common/input.jsx'

class CheckoutForm extends React.Component {
  render () {
    const clickHandler = (e) => {
      console.log('clicked')
      e.preventDefault()
      var paymentForm = document.getElementById('payment-form')
      console.log(paymentForm)
      const stripeResponseHandler = (status, response) => {
        document.cookie = 'currency=GBP;'
        document.cookie = 'price=123;'
        if (response.error) {
          console.log('error: ', response.error.message)
          document.getElementById('payment-errors').innerHTML = response.error.message
        } else {
          document.getElementById('payment-errors').innerHTML = ''
          console.log('response ID: ', response.id)
          var token = response.id
          var cookie = document.cookie
          console.log('COOKIE', cookie)
          // var xhr = new XMLHttpRequest
          // xhr.onreadystatechange = () => {
            // if(xhr.readyState === 4 && xhr.status === 200){
              var request = {
                currency: cookie.split('currency=')[1].split(';')[0],
                price: cookie.split('price=')[1].split(';')[0],
                source: token
              }
            // }
          // }
          console.log(request, 'REQUEST')
          // xhr.open('POST', '/pay')
          // xhr.send(JSON.stringify(request))
        }
      }
      Stripe.card.createToken(paymentForm, stripeResponseHandler)
    }

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
            <label>CVC* (<a href='#'>What's this?</a>):</label>
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

const formStyles = {
  border: '3px solid #222E3E',
  borderRadius: '5px',
  padding: '0.7em'
}

const divStyles = {
  marginBottom: '1em'
}

export default CheckoutForm
