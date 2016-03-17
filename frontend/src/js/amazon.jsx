import React from 'react'
import ReactDom from 'react-dom'
import Category from './itemsOnHomepage/Category.jsx'
import SearchBar from './searchbar/searchbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <p>
        Amazon sucks, fAC7 is better!!!
      </p>
    <Category categoryName='cat name' />
    <ProductPage />
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
