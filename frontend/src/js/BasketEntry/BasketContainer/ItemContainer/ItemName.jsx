import React from 'react'

const ItemName = (props) => {
  return <a href={props.url}>{props.title}</a>
}

ItemName.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default ItemName
