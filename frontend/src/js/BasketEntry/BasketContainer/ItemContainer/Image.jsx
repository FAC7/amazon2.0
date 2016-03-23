import React from 'react'

const style = {
  width: '100px',
  height: '100px'
}

class BasketImgItem extends React.Component {
  render () {
    return (
      <a href={this.props.url}><img style={style} src={this.props.imageLink} /></a>
    )
  }
}

BasketImgItem.propTypes = {
  imageLink: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}

export default BasketImgItem
