import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewList extends React.Component {
  mapReviews () {
    const reviews = this.props.reviews
    if (reviews) {
      return (
        reviews.map((item) => {
          return (
            <div>
              <h3>{item.author}</h3>
              <FiveStars rating={item.rating} />
              <h5>{item.date}</h5>
              <p>{item.text}</p>
            </div>
            )
        })
      )
    } else {
      return <p>reviews loading</p>
    }
  }

  render () {
    return (
      <div>{this.mapReviews()}</div>
    )
  }
}

ReviewList.propTypes = {
  reviews: React.PropTypes.array
}

export default ReviewList
