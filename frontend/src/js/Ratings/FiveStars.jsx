import React from 'react'
import Star from './Star.jsx'

class FiveStars extends React.Component {
  // gets average rating based on the array of reviews
  getAverageRating () {
    const reviews = JSON.parse(this.props.reviewsArray)
    if (reviews === 0) return 0
    const total = reviews.reduce((acc, curr) => {
      return acc + curr['rating']
    }, 0)
    return total / reviews.length
  }

  // returns 5 star components with an active class depending on the rating
  mapStars () {
    const average = Math.ceil(this.getAverageRating())
    return [1, 2, 3, 4, 5].map((i) => average > i ? <Star active={true} /> : <Star active={false} />)
  }

  render () {
    return (
    <div>
      {this.mapStars()}
    </div>
    )
  }
}

export default FiveStars
