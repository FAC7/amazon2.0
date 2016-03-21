import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <h1>Products Page</h1>
    <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
    <li><Link to="/basket" activeStyle={{ color: 'red' }}>Basket</Link></li>
    <li><Link to="/search" activeStyle={{ color: 'red' }}>Search</Link></li>
    </div>
  }
});
