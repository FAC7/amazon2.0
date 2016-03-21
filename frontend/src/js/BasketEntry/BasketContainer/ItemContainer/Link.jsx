import React from 'react'

const Link = (props) => <button onClick={props.callback.bind(null, props.index)}>
                          {props.linkName}
                        </button>

Link.propTypes = {
  callback: React.PropTypes.func.isRequired,
  linkName: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired
}

export default Link
