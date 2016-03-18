import React from 'react'

class Nav extends React.Component {

  render () {
    const ulInlineStyle = {
      backgroundColor: '#222E3E',
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'fixed',
      height: '10vh',
      width: '100%',
      listStyleType: 'none',
      margin: 'auto',
      padding: '10px 0px 10px 0px'
    }

    const aInlineStyle = {
      padding: '10px',
      color: '#FFFFFF'
    }

    return (
      <div>
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
      </div>
    )
  }
}

Nav.propTypes = {
  home: React.PropTypes.string,
  browse: React.PropTypes.string,
  checkout: React.PropTypes.string,
  basket: React.PropTypes.string
}

export default Nav
