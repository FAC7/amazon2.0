import React from 'react'

const ItemName = (props) => {
  <a href={props.url}>{props.itemName}</a>
}

ItemName.propTypes = {
  url: React.PropTypes.string.isRequired,
  itemName: React.PropTypes.string.isRequired
}

export default ItemName
