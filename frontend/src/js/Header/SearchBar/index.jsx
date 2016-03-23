import React from 'react'
import SearchBox from './searchbox.jsx'
import SubmitButton from './submitbutton.jsx'
import CategoryButton from './categorybutton.jsx'

class SearchBar extends React.Component {
  render () {
    styles.width = this.props.width
    styles.height = this.props.height
    return (
      <form formAction={this.props.submitURL} onSubmit={this.props.submitHandler} style={styles}>
        <CategoryButton categorySelect={this.props.categorySelect} />
        <SearchBox
          defaultValue='Type here...'
          onChange={this.props.handleChange}
          inputColor={this.props.inputColor}
          roundRight={!this.props.showSubmit} />
        <SubmitButton show={this.props.showSubmit} buttonColor={this.props.buttonColor}/>
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
  inputColor: React.PropTypes.string,
  list: React.PropTypes.array,
  categorySelect: React.PropTypes.func,
  handleChange: React.PropTypes.func
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
