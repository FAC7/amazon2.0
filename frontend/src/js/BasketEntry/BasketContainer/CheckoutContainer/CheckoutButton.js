import React from 'react'

const Button = (props) => <button onClick={props.handleClick}>
                            {props.buttonName}
                          </button>

Button.propTypes = {
  buttonName: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

export default Button