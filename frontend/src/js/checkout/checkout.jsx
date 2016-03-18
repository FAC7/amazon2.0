import React from 'react'
import Input from '../common/input.jsx'

class CheckoutForm extends React.Component {
  render () {
    return (
      <div>
        <h2>Checkout</h2>
        <h4>Please enter your card details</h4>
        <form style={formStyles}>
          <div style={divStyles}>
            <label htmlFor='card-number'>Card Number*:</label>
              <Input
                id='card-number'
                type='number'
                name='card-number'
                placeholder='NNNNNNNNNNNNNNNN'
                width='15em' />
          </div>

          <div style={divStyles}>
            <label>Expiry Date*:
              <Input
                type='number'
                name='expiry-date'
                placeholder='MM/YY'
                width='50px' />
            </label>
          </div>

          <div style={divStyles}>
            <label>Issue Number (Switch/Solo only):</label>
            <Input
              type='number'
              name='issue-number'
              placeholder='NN'
              width='30px' />
          </div>

          <div style={divStyles}>
            <label>CVC* (<a href='#'>What's this?</a>):</label>
            <Input
              type='number'
              name='cvc'
              placeholder='NNN'
              width='40px' />
          </div>

          <Input
            type='submit'
            name='submit'
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
