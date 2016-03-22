import React from 'react'

import Button from './CheckoutButton.jsx'

import Subtotal from './ItemCount.jsx'

import TotalPrice from './TotalPrice.jsx'

class CheckoutContainer extends React.Component {

  shouldComponentUpdate (nextProps) {
    return nextProps !== this.props.numItems
  }

  render () {
    return (
      <div>
        <Subtotal subTotal='Subtotal ' numItems={this.props.numItems} />
        <TotalPrice getPrice={this.props.getPrice} />
        <Button handleClick={this.props.redirectClick} buttonText='Proceed to Checkout' />
      </div>
    )
  }
}

CheckoutContainer.propTypes = {
  redirectClick: React.PropTypes.func,
  numItems: React.PropTypes.func,
  getPrice: React.PropTypes.func
}

export default CheckoutContainer
