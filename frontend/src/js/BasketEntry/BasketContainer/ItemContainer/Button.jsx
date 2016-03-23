import React from 'react'

const Button = (props) => <button onClick={props.handleClick.bind(null, props.index)}>{props.buttonText}</button>

Button.propTypes = {
  handleClick: React.PropTypes.func,
  buttonText: React.PropTypes.string.isRequired,
  index: React.PropTypes.number
}

export default Button
