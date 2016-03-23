import React from 'react'

const Price = (props) => {
  return <p>{props.currencySymbol}{props.price}</p>
}

Price.propTypes = {
  price: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}

export default Price
