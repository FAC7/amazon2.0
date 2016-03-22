import React from 'react'
import { Link } from 'react-router'
import Category from './../js/itemCategory/Category.jsx'
import FiveStars from './../js/Ratings/FiveStars.jsx'
import SearchBar from './../js/searchbar/searchbar.jsx'
// import searchbox from './../js/searchbar/searchbox.jsx'
// import Nav from './'
// import FiveStars from './../js/Ratings/FiveStars.jsx'
// import ProductPage from './../js/ProductPage/ProductPage.jsx'
// import SearchBox from './../js/searchbar/searchbox.jsx'
// import SubmitButton from './../js/searchbar/submitbutton.jsx'
require('../css/grid.css')

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Amazon 2.0 Home Page</h1>
        <SearchBar/>
        <Category />
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
        <FiveStars/>
      </div>
    )
  }
})
