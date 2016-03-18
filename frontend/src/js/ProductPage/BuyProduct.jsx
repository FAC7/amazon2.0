import React from 'react'
import Button from './Button.jsx'

class BuyProduct extends React.Component {
  render () {
    return (
      <div>
        <p>£{this.props.price}</p>
        <p>{this.props.quantity} items left</p>
        <Button {...this.props} />
      </div>
    )
  }
}

export default BuyProduct
