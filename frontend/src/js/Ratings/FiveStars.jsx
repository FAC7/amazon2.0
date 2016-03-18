import React from 'react'
import Star from './Star.jsx'

class FiveStars extends React.Component {
  // returns 5 star components with an active class depending on the rating
  rateStars () {
    //
  }

  mapStars () {
    const average = this.props.averageRating
    return [1, 2, 3, 4, 5].map((i) => {
      let clickFn = this.props.clickStars.bind(this, i)
      let activeClass = average > i
      return <Star clickStar={clickFn} key={'star-' + i} active={activeClass} />
    })
  }

  render () {
    return (
    <div>
      {this.mapStars()}
    </div>
    )
  }
}

FiveStars.defaultProps = {
  averageRating: 3,
  productId: 123456
}

export default FiveStars
