import React from 'react'

class Link extends React.Component {
  render () {
    return <button onClick={this.props.callback.bind(null, this.props.index)}>{this.props.linkName}</button>
  }
}

Link.propTypes = {
  callback: React.PropTypes.func.isRequired,
  linkName: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired
}

export default Link
