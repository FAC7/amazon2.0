import React from 'react'
import cookieParser from 'cookieparser'
require('./PaymentStatus.css')

class Payment extends React.Component {
  render () {
    const payDeets = cookieParser.parse(document.cookie)
    const status = payDeets.status === 'true'
    const success = status ? 'Payment Confirmed' : 'Payment Failed'
    const filler = status ? 'Thankyou for shopping with Amazon 2.0!' : 'We\'re sorry, your payment has been refused.'
    const display = {display: status ? 'block' : 'none'}

    return (
      <div className='mainDiv'>
        <div style={{textAlign: 'center'}}>
          <div><h1>{success}</h1></div>
          <div><h2>{filler}</h2></div>
          <div><h2 style={display}>{'The amount of ' + payDeets.amount + ' has been charged to your card.'}</h2></div>
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
