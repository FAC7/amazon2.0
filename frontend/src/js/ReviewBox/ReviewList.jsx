import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewList extends React.Component {
  mapReviews () {
    console.log('>>>>>', this.props.reviews)
    const reviews = this.props.reviews
    if (reviews) {
      return reviews.map(item => {
        return (
          <div>
            <h3>{item.author}</h3>
            <FiveStars rating={item.rating} />
            <p>{item.text}</p>
          </div>
          )
      })
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

export default ReviewList
