import React from 'react'
import { Link } from 'react-router'

class ItemName extends React.Component {
  render () {
    return <Link to={this.props.url}>{this.props.title}</Link>
  }
}

ItemName.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default ItemName
