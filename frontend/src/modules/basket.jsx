import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <h1>Your Basket</h1>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Products</Link></li>
    </div>
  }
});