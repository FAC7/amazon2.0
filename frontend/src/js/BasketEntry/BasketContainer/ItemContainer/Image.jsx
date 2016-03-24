import React from 'react'
import {Link} from 'react-router'

const style = {
  width: '100px',
  height: '100px'
}

class BasketImgItem extends React.Component {
  render () {
    return (
      <Link to={this.props.url}><img style={style} src={this.props.imageLink} /></Link>
    )
  }
}

BasketImgItem.propTypes = {
  imageLink: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}

export default BasketImgItem
