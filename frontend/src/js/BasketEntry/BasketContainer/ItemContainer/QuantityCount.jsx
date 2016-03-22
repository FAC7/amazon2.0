import React from 'react'

const Quantity = (props) => <p>{props.counter}</p>

Quantity.propTypes = {
  counter: React.PropTypes.number
}

export default Quantity
