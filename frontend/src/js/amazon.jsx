import React from 'react'
import ReactDom from 'react-dom'
import ProductPage from './ProductPage/ProductPage.jsx'
import ReviewBox from './ReviewBox/ReviewBox.jsx'
import EvenGrid from './GridExample/EvenGrid.jsx'
import UnevenGrid from './GridExample/UnevenGrid.jsx'

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <ReviewBox />
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
