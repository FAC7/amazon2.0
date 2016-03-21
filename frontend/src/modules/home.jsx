import React from 'react'
import { Link } from 'react-router'
import Category from './../js/itemCategory/Category.jsx'
import ProductPage from './../js/ProductPage/ProductPage.jsx'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Amazon 2.0 Home Page</h1>
        <Category categoryName='category name' />
        <ProductPage />
        <ul role='nav'>
          <li>
            <Link to='/home' activeStyle={{ color: 'red' }}> Home
            </Link>
          </li>
          <li>
            <Link to='/basket' activeStyle={{ color: 'red' }}> Basket
            </Link>
          </li>
          <li>
            <Link to='/search' activeStyle={{ color: 'red' }}> Search
            </Link>
          </li>
          <li>
            <Link to='/payment' activeStyle={{ color: 'red' }}> Payment
            </Link>
          </li>
          <li>
            <Link to='/products' activeStyle={{ color: 'red' }}> Products
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
