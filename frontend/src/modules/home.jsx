import React from 'react'
import Category from './../js/itemCategory/Category.jsx'
import Header from './../js/Header/index.jsx'

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
        <Header/>
        <Category />
      </div>
    )
  }
})
