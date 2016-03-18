import React from 'react'

// We don't define proptypes here because we want to support
// any of the valid HTML attributes in this component.

class Input extends React.Component {
  render () {
    var {display, width, height, ...props} = this.props
    styles.width = (width) ? width : undefined
    styles.height = (height) ? height : undefined
    styles.display = display
    return (
      <input style={styles} {...props}/>
    )
  }
}

Input.propTypes = {
  display: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

Input.defaultProps = {
  display: 'inline'
}

const styles = {
  border: 'none',
  borderRadius: '5px',
  outline: 'none',
  lineHeight: '1em',
  paddingLeft: '1em',
  backgroundColor: '#EEE',
  color: '#222E3E'
}

export default Input
