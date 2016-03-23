import React from 'react'
import cookieParser from 'cookieparser'
require('./PaymentStatus.css')

class Payment extends React.Component {
  render () {
    var payDeets = cookieParser.parse(document.cookie)
    payDeets = payDeets.am2_pay_data.split(',').reduce((acc, curr) => {
      const arr = curr.split('=')
      acc[arr[0]] = arr[1]
      return acc
    }, {})
    const success = payDeets.success === 'true'
    const headerMessage = success ? 'Payment Confirmed' : 'Payment Failed'
    const filler = success ? 'Thankyou for shopping with Amazon 2.0!' : 'We\'re sorry, your payment has been refused.'
    const display = {display: success ? 'block' : 'none'}

    return (
      <div className='mainDiv'>
        <div style={{textAlign: 'center'}}>
          <div><h1>{headerMessage}</h1></div>
          <div><h2>{filler}</h2></div>
          <div><h2 style={display}>{'The amount of £' + payDeets.amount + ' has been charged to your card.'}</h2></div>
        </div>
        <table className='tableDiv'>
          <tbody>
            <tr>
              <td className='tdRight'>Order Number:</td>
              <td>{payDeets.order_number}</td>
            </tr>
            <tr>
              <td className='tdRight'>Card Number:</td>
              <td>xxxx xxxx xxxx {payDeets.card_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Payment
