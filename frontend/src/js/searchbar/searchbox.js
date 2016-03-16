import React from 'react'

class SearchBox extends React.Component {
  render () {
    styles.backgroundColor = this.props.inputColor
    styles.borderRadius    = (this.props.roundRight) ? '5px' : styles.borderRadius
    styles.width           = (this.props.roundRight) ? '100%' : styles.width
    return (
      <input type="text" placeholder={this.props.defaultValue} style={styles}/>
    )
  }
}

SearchBox.propTypes = {
  defaultValue: React.PropTypes.string,
  inputColor: React.PropTypes.string,
  roundRight: React.PropTypes.bool
}

SearchBox.defaultProps = {
  defaultValue: '',
  inputColor: '#EEE',
  roundRight: false
}

const styles = {
  margin: "0",
  padding: "0 0 0 10px",
  width: "90%",
  height: "100%",
  border: "none",
  borderRadius: "5px 0px 0px 5px",
  outline: "unset"
}

export default SearchBox
