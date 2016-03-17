import React from 'react'
import Star from './Star.jsx'

class FiveStars extends React.Component {
	// gets average rating based on the array of reviews
	getAverageRating () {
		const reviews = JSON.parse(this.props.reviewsArray)
		console.log(reviews);
		if (reviews === 0) return 0
		const total = reviews.reduce((acc, curr) => {
			return acc + curr['rating']
		}, 0)
		return total / reviews.length
	}

	// returns 5 star components with an active class depending on the rating
	mapStars () {
		const average = Math.ceil(this.getAverageRating())
		let stars = []
		let i
		for (i = 0; i < 5; i ++) {
			(i < average) ? stars.push(<Star active={true} />) : stars.push(<Star active={false} />)
		}
		return stars
	}

	render () {
		return <div>{this.mapStars()}</div>
	}
}

export default FiveStars
