import React from 'react'
import Category from './../js/itemCategory/Category.jsx'
import Header from './../js/Header/index.jsx'
import BottomFooter from './../js/footer/footer.js'
require('../css/grid.css')

export default React.createClass({
  render () {
    return (
      <div>
        <Header/>
        <Category />
        <BottomFooter />
      </div>
    )
  }
})
