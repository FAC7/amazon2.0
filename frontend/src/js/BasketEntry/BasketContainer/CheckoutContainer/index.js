import React from 'react'

import Button from './CheckoutButton.js'

import Subtotal from './ItemCount.js'

import TotalPrice from './TotalPrice.js'

class CheckoutContainer extends React.Component {

  // shouldComponentUpdate(nextProps) {
  // 	return nextProps !== this.props.numItems
  // }

  render () {
    return (
    <div>
      <Subtotal subTotal='Subtotal ' numItems={this.props.numItems} />
      <TotalPrice getPrice={this.props.getPrice} />
      <Button handleClick={this.props.redirectClick} />
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
