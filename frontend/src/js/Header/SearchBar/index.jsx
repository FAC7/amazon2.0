import React from 'react'
import SearchBox from './searchbox.jsx'
import SubmitButton from './submitbutton.jsx'
import CategoryButton from './categorybutton.jsx'
import querystring from 'querystring'
import { browserHistory } from 'react-router'

class SearchBar extends React.Component {
  constructor () {
    super()
    this.search = this.search.bind(this)
  }

  search (cb, e) {
    e.preventDefault()
    var xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      cb(response.target.response)
      browserHistory.push('/searchResults')
    })

    const qs = querystring.stringify({
      category: document.getElementById('select').value,
      input: document.getElementById('inputBox').value
    })

    xhr.open('GET', '/searchrequest?' + qs)
    xhr.send()
  }

  render () {
    styles.width = this.props.width
    styles.height = this.props.height
    return (
      <form
        formAction={this.props.submitURL}
        onSubmit={this.search.bind(this, this.props.setResultsState)}
        style={styles}>
        <CategoryButton categorySelect={this.props.categorySelect} />
        <SearchBox
          placeholder='Type here...'
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
  handleChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  setResultsState: React.PropTypes.func
}

SearchBar.defaultProps = {
  submitURL: '/',
  submitHandler: () => {},
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
