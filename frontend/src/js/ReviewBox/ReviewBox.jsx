import React from 'react'
import Review from './Review.jsx'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewBox extends React.Component {
  render () {
    return (
    <div>
      <FiveStars {...this.props} />
      <Review {...this.props} />
    </div>
    )
  }
}

export default ReviewBox
