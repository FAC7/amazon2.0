import React from 'react'

const style = {
  fontSize: '20px',
  verticalAlign: 'top',
  paddingTop: '0px',
  marginTop: '0px'
}

const Price = (props) => {
  return <p style={style}>{props.currencySymbol}{props.cost}</p>
}

Price.propTypes = {
  cost: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}

export default Price
