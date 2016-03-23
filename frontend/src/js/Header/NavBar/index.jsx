import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><Link to={this.props.basket}>Basket</Link></li>
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

export default Nav
