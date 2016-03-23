import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import PaymentStatus from './PaymentStatus/index.jsx'
import SearchResults from './SearchResults/index.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import Basket from './BasketEntry/index.jsx'
<<<<<<< .merge_file_MowCQg
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
=======
import Checkout from './Checkout/index.jsx'
import { Router, Route } from 'react-router'
import querystring from 'querystring'
import { browserHistory } from 'react-router'
>>>>>>> .merge_file_Q0bNkX

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

  changeState (change) {
    this.setState(change)
  },

  render () {
    const childWithProps = React.cloneElement(this.props.children, { // eslint-disable-line
      state: this.state,
      changeState: this.changeState
    })

<<<<<<< .merge_file_MowCQg
    return childWithProps
=======
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} search={this.search} categorySelect={this.categorySelect} handleChange={this.handleChange} />
        <Route path='/basket' activeStyle={{ color: 'red' }} component={Basket} />
        <Route path='/checkout' activeStyle={{ color: 'red' }} component={Checkout} />
        <Route path='/payment-status' activeStyle={{ color: 'red' }} component={PaymentStatus} />
        <Route path='/item/:itemID' component={ProductPage} search={this.search} categorySelect={this.categorySelect} handleChange={this.handleChange} />
        <Route path='/search?q=:searchString&categories=:categories' component={SearchResults} />
      </Router>
    )
>>>>>>> .merge_file_Q0bNkX
  }

})

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='basket' activeStyle={{ color: 'red' }} component={Basket} />
      <Route path='/payment' activeStyle={{ color: 'red' }} component={Payment} />
      <Route path='/item/:itemID' component={ProductPage} />
      <Route path='/searchResults' component={SearchResults} />
    </Route>
  </Router>
  ), document.getElementById('amazon'))
