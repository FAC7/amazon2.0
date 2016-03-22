import React from 'react'

const Price = (props) => {
  return <p>{props.currencySymbol}{props.cost}</p>
}

Price.propTypes = {
  cost: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}

export default Price
