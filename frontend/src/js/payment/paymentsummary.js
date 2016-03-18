import React from 'react'
import cookieParser from 'cookieparser'

class Payment extends React.Component {
  render () {
    const payDeets = cookieParser.parse(document.cookie)
    const success = payDeets.status ? 'Payment Confirmed' : 'Payment Failed'
    const filler = payDeets.status ? 'Thankyou for shopping with Amazon 2.0!' : 'We\'re sorry, your payment has been refused.'

    return (
      <div>
        <div><h1>{success}</h1></div>

        <div><h2>{filler}</h2></div>

        <table>
          <tr>
            <td>Order Number:</td>
            <td>{payDeets.orderNumber}</td>
          </tr>
          <tr>
            <td>Card Number:</td>
            <td>xxxx xxxx xxxx {payDeets.cardNumber}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Payment
