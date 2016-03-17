import React from 'react'

const DeleteLink = (props) => <button onClick={props.deleteFunction.bind(null, props.index)}>delete</button>

DeleteLink.propTypes = {
  deleteFunction: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired
}

export default DeleteLink
