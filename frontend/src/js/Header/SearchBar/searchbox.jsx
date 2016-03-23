import React from 'react'

class SearchBox extends React.Component {
  render () {
    styles.backgroundColor = this.props.inputColor
    styles.borderRadius = (this.props.roundRight) ? '5px' : styles.borderRadius
    styles.width = (this.props.roundRight) ? '100%' : styles.width
    return (
      <input id='inputBox' onChange={this.props.onChange} type='text' placeholder={this.props.placeholder} style={styles}/>
    )
  }
}

SearchBox.propTypes = {
  placeholder: React.PropTypes.string,
  inputColor: React.PropTypes.string,
  roundRight: React.PropTypes.bool,
  onChange: React.PropTypes.func
}

SearchBox.defaultProps = {
  placeholder: '',
  inputColor: '#EEE',
  roundRight: false
}

const styles = {
  margin: '0',
  padding: '0 0 0 1em',
  width: '90%',
  height: '100%',
  lineHeight: '1em',
  border: 'none',
  borderRadius: '5px 0px 0px 5px',
  outline: 'unset',
  flexGrow: 8
}

export default SearchBox
