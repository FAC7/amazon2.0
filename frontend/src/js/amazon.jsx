import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Payment from './../modules/payment.jsx'
import SearchResults from './SearchResults/index.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import Basket from './BasketEntry/index.jsx'
import { Router, Route } from 'react-router'
import querystring from 'querystring'

require('../css/main.css')

const App = React.createClass({
  getInitialState () {
    return {
      searchResults: [],
      input: '',
      category: 'global',
      history: []
    }
  },

  // mixins: [Router.Navigation],
  //
  // // propTypes: {
  // //   history: []
  // // },

  categorySelect (e) {
    this.state.category = e.target.value
    this.setState(this.state)
  },

  handleChange (e) {
    this.state.input = e.target.value
    this.setState(this.state)
    // TODO Setup autocomplete
  },

  search (e) {
    e.preventDefault()
    var obj = {}
    obj.category = this.state.category
    obj.input = this.state.input
    var xhr = new XMLHttpRequest() // eslint-disable-line

    xhr.addEventListener('load', (response) => {
      console.log('loaded!')
      this.state.searchResults = response.target.response
      this.setState(this.state)
      obj = {}
      obj.q = this.state.input
      obj.categories = this.state.category
      // Router.transitionTo('/search')
      this.state.history.push('/search?' + querystring.stringify(obj)) // eslint-disable-line
      this.setState(this.state)
      console.log('history-->', this.state.history)
    })
    xhr.open('GET', '/searchrequest?' + querystring.stringify(obj))
    xhr.send()
  },

  render () {
    return (
      <Router>
        <Route path='/' component={Home} search={this.search} categorySelect={this.categorySelect} handleChange={this.handleChange} />
        <Route path='/basket' activeStyle={{ color: 'red' }} component={Basket} />
        <Route path='/payment' activeStyle={{ color: 'red' }} component={Payment} />
        <Route path='/item/:itemID' component={ProductPage} search={this.search} categorySelect={this.categorySelect} handleChange={this.handleChange} />
        <Route path='/search?q=:searchString&categories=:categories' component={SearchResults} />
      </Router>
    )
  }

})

render((
  <App/>
  ), document.getElementById('amazon'))
