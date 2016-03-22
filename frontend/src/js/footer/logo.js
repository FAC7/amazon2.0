import React from 'react'

class Logo extends React.Component {
  render () {
    styles.height = this.props.height
    styles.width = this.props.width
    return (
      <img
        style={styles}
        src='http://scottmarshallmusic.com/wp-content/uploads/2015/01/amazon-icon.png'
      />
    )
  }
}

Logo.propTypes = {
  height: React.PropTypes.string,
  width: React.PropTypes.string
}

Logo.defaultProps = {
  height: '1em',
  width: '1em'
}

var styles = {}

export default Logo
