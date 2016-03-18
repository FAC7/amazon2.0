import React from 'react'
import ReactDom from 'react-dom'
import Category from './itemCategory//Category.jsx'
import SearchBar from './searchbar/searchbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
require ('../css/main.css')

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <p>
        Amazon sucks, fAC7 is better!!!
      </p>
      <Category categoryName='category name' />
      <Category categoryName='bouh' />
    <ProductPage />
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
