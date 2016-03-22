import React from 'react'

class Button extends React.Component {

  render () {
    return (
    <button onClick={this.props.addToBasket.bind(this, this.props)} className={this.props.buttonType}>
      {this.props.buttonText}
    </button>
    )
  }
}

export default Button
