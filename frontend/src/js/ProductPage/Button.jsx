import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <button onClick={this.props.addToBasket.bind(this, this.props)} className='button-blue'>
        {this.props.buttonText}
      </button>
    )
  }
}

Button.propTypes = {
  addToBasket: React.PropTypes.func,
  buttonType: React.PropTypes.string,
  buttonText: React.PropTypes.string
}

export default Button
