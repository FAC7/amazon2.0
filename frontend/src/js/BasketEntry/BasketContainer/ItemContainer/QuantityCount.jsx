import React from 'react'

const styleQuantity = {
  marginTop: '3px',
  paddingLeft: '5px',
  paddingRight: '5px'
}

const Quantity = (props) => <p style={styleQuantity}>{props.counter}</p>

Quantity.propTypes = {
  counter: React.PropTypes.number
}

export default Quantity
