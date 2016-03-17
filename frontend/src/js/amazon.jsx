import React from 'react'
import ReactDom from 'react-dom'
import SearchBar from './searchbar/searchbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'

class Amazon extends React.Component {
  render () {
    return (
    <ProductPage />
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
