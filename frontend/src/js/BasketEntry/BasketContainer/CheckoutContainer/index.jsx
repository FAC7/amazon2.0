import React from 'react'

import Button from './CheckoutButton.jsx'

import Subtotal from './ItemCount.jsx'

import TotalPrice from './TotalPrice.jsx'

const style = {
  paddingLeft: '60px',
  paddingTop: '25px'

}

class CheckoutContainer extends React.Component {

  shouldComponentUpdate (nextProps) {
    return nextProps !== this.props.numItems
  }

  componentDidMount () {
    window.onscroll = function () {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("test").style['position'] = 'fixed'
        document.getElementById("test").style.top = '0'
    } else {
      document.getElementById("test").style['position'] = 'relative'
    }

}
  }

  render () {
    return (
      <div id="test" style={style}>
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
