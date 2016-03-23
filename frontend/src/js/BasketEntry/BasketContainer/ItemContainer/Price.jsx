import React from 'react'

class Price extends React.Component {
  render () {
    return <p>{this.props.currencySymbol}{this.props.price}</p>
  }
}

Price.propTypes = {
  price: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}

export default Price
