import React from 'react'

class Button extends React.Component {
  render () {
    const buttonText = this.props.buttonText
    const link = this.props.link
    return (
            <a href={link}>
                <button>{buttonText}</button>
            </a>
        )
    }
}

Button.PropTypes = {
  buttonText : React.PropTypes.string.isRequired,
  link       : React.PropTypes.string.isRequired
}

export default Button;
