import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return <div>
      <h1>Welcome to the Search Page</h1>
      <li>
        <Link to='/' activeStyle={{ color: 'red' }}> Home
        </Link>
      </li>
      <li>
        <Link to='/products' activeStyle={{ color: 'red' }}> Products
        </Link>
      </li>
      <li>
        <Link to='/basket' activeStyle={{ color: 'red' }}> Basket
        </Link>
      </li>
    </div>
  }
})
