import React from 'react'
import { Link } from 'react-router'

const Button = (props) => <button onClick={props.handleClick}>
                            <Link to='/checkout' activeStyle={{ color: 'red'}}>
                            {props.buttonText}
                            </Link>
                          </button>

Button.propTypes = {
  handleClick: React.PropTypes.func,
  buttonText: React.PropTypes.string
}

export default Button
