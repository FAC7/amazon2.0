import React from 'react'
// require('./style.css')

class SearchBox extends React.Component {
  render () {
    searchBoxStyle.backgroundColor = this.props.inputColor
    if (this.props.roundRight) {
        searchBoxStyle.borderRadius = '5px'
        searchBoxStyle.width = '100%'
    }
    return (
      <input type="text" placeholder={this.props.defaultValue} style={searchBoxStyle}/>
    )
  }
}

SearchBox.propTypes = {
  defaultValue: React.PropTypes.string,
  inputColor: React.PropTypes.string
}

var searchBoxStyle = {
  margin: "0",
  padding: "0 0 0 10px",
  width: "90%",
  height: "100%",
  border: "none",
  borderRadius: "5px 0px 0px 5px"
}

export default SearchBox
