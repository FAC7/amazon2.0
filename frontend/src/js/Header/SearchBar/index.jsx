import React from 'react'
import { browserHistory } from 'react-router'
import querystring from 'querystring'
import SearchBox from './searchbox.jsx'
import SubmitButton from './submitbutton.jsx'
import CategoryButton from './categorybutton.jsx'

class SearchBar extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.showArray = this.showArray.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
    this.state = {
      input: '',
      category: 'global',
      array: ['global'],
      listOpen: false,
      results: ''
    }
  }

  showArray (item) {
    const catArray = ['global', 'technology', 'computers', 'global', 'sport', 'garden', 'furniture', 'electric', 'clothing', 'men', 'television', 'women'].sort()
    this.state.listOpen = !this.state.listOpen
    if (this.state.listOpen) {
      this.state.array = []
      catArray.map((i) => this.state.array.push(i))
    } else {
      this.state.category = item
      this.state.array = [item]
    }
    this.setState(this.state)
  }

  handleChange (e) {
    this.state.input = e.target.value
    this.setState(this.state)
    // TODO Setup autocomplete
  }

  sendRequest (e) {
    e.preventDefault()
    console.log(this.state, 'STATE')
    var obj = {}
    obj.category = this.state.category
    obj.input = this.state.input
    var xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      console.log(response.target.response, '<<----RESPONSE!!!!!')
      this.state.results = response.target.response
      this.setState(this.state)
      console.log(this.state, 'STATE!!!!!')
      obj = {}
      obj.q = 'input'
      obj.categories = 'categories'
      browserHistory.push('/search' + querystring.stringify(obj))
    })
    console.log(obj, 'OBJ')
    xhr.open('GET', '/searchrequest?' + querystring.stringify(obj))
    xhr.send()
  }

  render () {
    styles.width = this.props.width
    styles.height = this.props.height
    return (
    <form formAction={this.props.submitURL} onSubmit={this.props.submitHandler} style={styles}>
      <CategoryButton array={this.state.array} showArray={this.showArray} />
      <SearchBox
        defaultValue='Type here...'
        onChange={this.handleChange}
        inputColor={this.props.inputColor}
        roundRight={!this.props.showSubmit} />
      <SubmitButton show={this.props.showSubmit} buttonColor={this.props.buttonColor} requestFunction={this.sendRequest}/>
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
