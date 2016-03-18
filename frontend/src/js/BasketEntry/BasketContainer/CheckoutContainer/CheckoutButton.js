import React from 'react'
import Link from './Link.js'

const Button = (props) => <Link callback={props.handleClick} linkName='Proceed to Checkout' />

Button.propTypes = {
  handleClick: React.PropTypes.func
}

export default Button
