import React from 'react'

class Copyright extends React.Component {
  render () {
    styles.height = this.props.height
    styles.width = this.props.width
    styles.fontFamily = this.props.fontFamily
    return (
      <div style={styles}>{this.props.copyright}</div>
    )
  }
}

Copyright.propTypes = {
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  fontFamily: React.PropTypes.string,
  copyright: React.PropTypes.string.isRequired
}

Copyright.defaultProps = {
  height: '1em',
  width: '1em',
  fontFamily: 'Serif'
}

var styles = {
  backgroundColor: 'red',
  display: 'block'
}

export default Copyright
