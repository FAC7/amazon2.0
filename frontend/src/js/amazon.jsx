import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Search from './SearchResults/index.jsx'
import Payment from './../modules/payment.jsx'
import SearchResults from './SearchResults/index.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import Basket from './BasketEntry/index.jsx'
import { Router, Route } from 'react-router'
import querystring from 'querystring'
import { browserHistory } from 'react-router'

require('../css/main.css')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      searchResults: [],
      input: '',
      category: 'global',
      list: ['global'],
      listOpen: false
    }
    this.search = this.search.bind(this)
    this.showArray = this.showArray.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  showArray (item) {
    const catArray = ['global', 'technology', 'computers', 'global', 'sport', 'garden', 'furniture', 'electric', 'clothing', 'men', 'television', 'women']
    if (!this.state.listOpen) {
      console.log('working')
      this.state.list = []
      catArray.map((i) => this.state.list.push(i))
    } else {
      this.state.category = item
      this.state.list = [item]
    }
    this.state.listOpen = !this.state.listOpen
    this.setState(this.state)
  }

  handleChange (e) {
    this.state.input = e.target.value
    this.setState(this.state)
    // TODO Setup autocomplete
  }

  search (e) {
    e.preventDefault()
    var obj = {}
    obj.category = this.state.category
    obj.input = this.state.input
    var xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      this.state.searchResults = response.target.response
      this.setState(this.state)
      obj = {}
      obj.q = 'input'
      obj.categories = 'categories'
      browserHistory.push('/search' + querystring.stringify(obj))
    })
    xhr.open('GET', '/searchrequest?' + querystring.stringify(obj))
    xhr.send()
  }

  render () {
    return (
      <Router>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/basket' activeStyle={{ color: 'red' }} component={Basket} />
        <Route path='/search' activeStyle={{ color: 'red' }} component={Search} search={this.search} showArray={this.showArray} handleChange={this.handleChange} list={this.state.list} />
        <Route path='/payment' activeStyle={{ color: 'red' }} component={Payment} />
        <Route path='/item/:itemID' component={ProductPage} />
        <Route path='/search?q=:searchString&categories=:categories' component={SearchResults} />
      </Router>
    )
  }

}

render((
  <App/>
  ), document.getElementById('amazon'))
