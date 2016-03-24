import React from 'react'

const styleButton = {
  backgroundColor: '#FFBE63',
  border: 'none',
  borderRadius: '8px',
  padding: '15px 32px',
  color: '#222E3E',
  fontSize: '20px'
}

const Button = (props) => <button style={styleButton} onClick={props.handleClick}>{props.buttonText}</button>

Button.propTypes = {
  handleClick: React.PropTypes.func,
  buttonText: React.PropTypes.string.isRequired
}

export default Button
