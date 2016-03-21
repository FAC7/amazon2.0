import React from 'react'

const Subtotal = (props) => <h4>{props.subTotal} {props.numItems()}</h4>

Subtotal.propTypes = {
  subTotal: React.PropTypes.string.isRequired,
  numItems: React.PropTypes.func
}

export default Subtotal
