import React from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.buttonText}</button>

Button.propTypes = {
  handleClick: React.PropTypes.func,
  buttonText: React.PropTypes.string
}

export default Button
