import React from 'react'
import cookieParser from 'cookieparser'
import utils from '../../../../backend/lib/utils.js'
require('./PaymentStatus.css')

class Payment extends React.Component {
  render () {
    const cookie = cookieParser.parse(document.cookie)
    const payDeets = utils.fromCookieString(cookie.am2_pay_data, ',')
    const success = payDeets.success === 'true'

    const headerMessage = success ? 'Payment Confirmed' : 'Payment Failed'
    const filler = success ? 'Thankyou for shopping with Amazon 2.0!' : 'We\'re sorry, your payment has been refused.'
    const display = {display: success ? 'block' : 'none'}

    if (success) {
      window.localStorage.clear()
    }
    return (
      <div className='mainDiv'>
        <div style={{textAlign: 'center'}}>
          <h1>{headerMessage}</h1>
          <h2>{filler}</h2>
          <h2 style={display}>{'The amount of £' + payDeets.amount + ' has been charged to your card.'}</h2>
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
