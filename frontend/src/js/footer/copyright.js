import React from 'react'

class Copyright extends React.Component {
  render () {
    return (
      <p style={styles}>{this.props.copyright}</p>
    )
  }
}

Copyright.propTypes = {
  copyright: React.PropTypes.string.isRequired
}

var styles = {
  display: 'block'
}

export default Copyright
