import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Payment from './../modules/payment.jsx'
import SearchResults from './SearchResults/index.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import Basket from './BasketEntry/index.jsx'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

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

    return childWithProps
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
