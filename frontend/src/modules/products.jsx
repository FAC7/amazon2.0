import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <h1>Products Page</h1>
    <li><Link to="/">Home</Link></li>
    </div>
  }
});
