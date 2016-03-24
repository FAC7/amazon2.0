import React from 'react'
import cx from 'classnames'
require('../../css/star.css')

class Star extends React.Component {
  highlightStar () {
    return cx({
      'fa': true,
      'fa-star': true,
      'active': this.props.active
    })
  }

  render () {
    return (
      <i onClick={this.props.clickStars} className={this.highlightStar()}></i>
    )
  }
}

Star.propTypes = {
  active: React.PropTypes.boolean,
  clickStars: React.PropTypes.function
}

export default Star
