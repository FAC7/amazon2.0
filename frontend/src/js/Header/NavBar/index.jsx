import React from 'react'
require('./NavBar.css')

class Nav extends React.Component {
  render () {
    return (
      <nav>
        <ul style={ulInlineStyle}>
          <li>
            <a style= {aInlineStyle} href={this.props.home}>Home</a>
          </li>
          <li>
            <a style= {aInlineStyle} href={this.props.browse}>Browse</a>
          </li>
          <li>
            <a style= {aInlineStyle} href={this.props.checkout}>Checkout</a>
          </li>
          <li>
            <a style= {aInlineStyle} href={this.props.basket}>Basket</a>
          </li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  home: React.PropTypes.string,
  browse: React.PropTypes.string,
  checkout: React.PropTypes.string,
  basket: React.PropTypes.string
}

const ulInlineStyle = {
}

const aInlineStyle = {
}

export default Nav
