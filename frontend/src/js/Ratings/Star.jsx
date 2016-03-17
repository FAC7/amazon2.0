import React from 'react'
import cx from 'classnames'
require('../../css/Ratings/star.css')

class Star extends React.Component {
	highlightStar () {
		return cx({
			'fa': true,
			'fa-star': true,
			'active': this.props.active
		});
	}

	render () {
		return (
				<i className={this.highlightStar()}></i>
			)
	}
}

export default Star
