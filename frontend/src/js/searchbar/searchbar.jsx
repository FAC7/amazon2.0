import React from 'react'
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
      category: '',
      array: ['all departments'],
      selected: 'all departments',
      listOpen: false
    }
  }

  showArray (item) {
    const catArray = ['all departments', 'technology', 'computers', 'global', 'sport', 'garden', 'furniture', 'electric', 'clothing', 'men', 'television', 'women'].sort()
    this.state.listOpen = !this.state.listOpen
    if (this.state.listOpen) {
      this.state.array = []
      catArray.map((i) => this.state.array.push(i))
    } else {
      this.state.selected = item
      this.state.array = [item]
    }
    this.setState(this.state)
  }

  handleChange (e) {
    this.state.input = e.target.value
    this.setState(this.state)
    console.log(this.state)
    // TODO Setup autocomplete
  }

  sendRequest (e) {
    e.preventDefault()
    console.log(this.state, 'STATE')
    var xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      if (response) {

      }
    })
    xhr.open('GET', '/search')
    xhr.send(this.state)
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
