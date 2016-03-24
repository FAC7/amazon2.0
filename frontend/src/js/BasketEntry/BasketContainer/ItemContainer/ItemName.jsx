import React from 'react'
import {Link} from 'react-router'

const ItemName = (props) => {
  return <Link to={props.url}>{props.title}</Link>
}

ItemName.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default ItemName
