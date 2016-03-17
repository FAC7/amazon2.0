import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <button className={this.props.buttonType}>{this.props.buttonText}</button>
    )
  }
}

export default Button
