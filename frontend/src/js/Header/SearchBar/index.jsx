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
    var obj1 = {}
    obj1.category = document.getElementById('select').value
    obj1.input = document.getElementById('inputBox').value
    var xhr = new XMLHttpRequest() // eslint-disable-line

    xhr.addEventListener('load', (response) => {
      console.log('loaded!')
      cb(response.target.response)
      // var obj = {}
      // obj.q = this.props.input
      // obj.categories = this.props.category
      // this.context.router.transitionTo('/search')
      // console.log('history-->', this.props)
      browserHistory.push('/searchResults') // eslint-disable-line
      // console.log('history-->', this.props.history)
    })
    console.log('URL BEING SENT ', querystring.stringify(obj1))
    xhr.open('GET', '/searchrequest?' + querystring.stringify(obj1))
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
