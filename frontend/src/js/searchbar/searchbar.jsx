import React from 'react'
import SearchBox from './searchbox.jsx'
import SubmitButton from './submitbutton.jsx'

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
<<<<<<< HEAD:frontend/src/js/searchbar/searchbar.js
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
=======
    <form formAction={this.props.submitURL} onSubmit={this.props.submitHandler} style={styles}>
      <SearchBox
        defaultValue='Type here...'
        onChange={this.handleChange}
        inputColor={this.props.inputColor}
        roundRight={!this.props.showSubmit} />
      <SubmitButton show={this.props.showSubmit} buttonColor={this.props.buttonColor} />
    </form>
>>>>>>> 91c97ff084a3557194735d6619c6388106b881c4:frontend/src/js/searchbar/searchbar.jsx
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
