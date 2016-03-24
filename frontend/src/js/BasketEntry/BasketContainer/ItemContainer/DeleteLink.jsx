import React from 'react'

const style = {
  border: '0px',
  padding: '0px',
  color: '#0066C0',
  background: 'none',
  fontSize: '12px'
}

const DeleteLink = (props) => {
  return <button style={style} onClick={props.deleteFunction.bind(null, props.index)}>Delete</button>
}

DeleteLink.propTypes = {
  deleteFunction: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired
}

export default DeleteLink
