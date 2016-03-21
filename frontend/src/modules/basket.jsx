import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <h1>Welcome To Your Basket</h1>
    <li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
    <li><Link to="/products" activeStyle={{ color: 'red' }}>Products</Link></li>
    <li><Link to="/payment" activeStyle={{ color: 'red' }}>Payment</Link></li>
    <li><Link to="/search" activeStyle={{ color: 'red' }}>Search</Link></li>
    </div>
  }
});
