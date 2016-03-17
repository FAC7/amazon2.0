import React from 'react'
import ReactDom from 'react-dom'
// import SearchBar from './searchbar/searchbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import FiveStars from './Ratings/FiveStars.jsx'
import DBdata from '../../dbdatasample-frontend.js'

const reviewData = DBdata['gghhshfa12312323213'].reviews

class Amazon extends React.Component {
  render () {
    return (
    <div>
      <ProductPage />
      <FiveStars reviewsArray={reviewData} />
    </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
