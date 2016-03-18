import React from 'react'
import SearchBox from './searchbox.js'
import SubmitButton from './submitbutton.js'

class SearchBar extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    // TODO Setup autocomplete
  }

  render () {
    styles.width = this.props.width
    styles.height = this.props.height
    return (
      <form formAction={this.props.submitURL} onSubmit={this.props.submitHandler} style={styles}>
        <SearchBox
          placeholder='Type here...'
          onChange={this.handleChange}
          inputColor={this.props.inputColor}
          roundRight={!this.props.showSubmit}/>
        <SubmitButton
          show={this.props.showSubmit}
          buttonColor={this.props.buttonColor}/>
      </form>
    )
  }
}

SearchBar.propTypes = {
  submitURL: React.PropTypes.string,
  submitHandler: React.PropTypes.func,
  showSubmit: React.PropTypes.bool,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  buttonColor: React.PropTypes.string,
  inputColor: React.PropTypes.string
}

SearchBar.defaultProps = {
  submitURL: '/',
  submitHandler: function () {},
  showSubmit: true,
  width: '90%',
  height: '2em',
  buttonColor: '#CCC',
  inputColor: '#EEE'
}

const styles = {
  margin: 'auto',
  display: 'flex',
  flexWrap: 'nowrap'
}

export default SearchBar
