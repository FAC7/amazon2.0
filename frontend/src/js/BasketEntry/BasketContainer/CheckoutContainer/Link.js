import React from 'react'

const Link = (props) => <button onClick={props.callback}>{props.linkName}</button>

Link.propTypes = {
  callback: React.PropTypes.func,
  linkName: React.PropTypes.string.isRequired
}

export default Link
