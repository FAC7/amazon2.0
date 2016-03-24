import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <button onClick={this.props.handleClick.bind(null, this.props.index)}>{this.props.buttonText}</button>
    )
  }
}

Button.propTypes = {
  handleClick: React.PropTypes.func,
  buttonText: React.PropTypes.string.isRequired,
  index: React.PropTypes.number
}

export default Button
