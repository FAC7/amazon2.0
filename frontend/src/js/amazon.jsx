import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Search from './SearchResults/index.jsx'
import Payment from './../modules/payment.jsx'
import SearchResults from './SearchResults/index.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import Basket from './BasketEntry/index.jsx'
import { Router, Route } from 'react-router'
import Checkout from './Checkout/index.jsx'
require('../css/main.css')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      searchResults: []
    }
    this.search = this.search.bind(this)
  }

  search () {
    this.setState({searchResults: [1]})
  }

  render () {
    return (
      <Router>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/basket' activeStyle={{ color: 'red' }} component={Basket} />
        <Route path='/search' activeStyle={{ color: 'red' }} component={Search} search={this.search} />
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
