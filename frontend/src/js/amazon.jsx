import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Products from './../modules/products.jsx'
import Basket from './../modules/basket.jsx'
import Search from './../modules/search.jsx'
import Payment from './../modules/payment.jsx'
// import ReactDom from 'react-dom'
// import Category from './itemCategory/Category.jsx'
// import SearchBar from './searchbar/searchbar.jsx'
// import ProductPage from './ProductPage/ProductPage.jsx'
import { Router, Route } from 'react-router'
require('../css/main.css')

class App extends React.Component {
  constructor () {
    this.state = {
      searchResults = []
    }
    this.search = this.search.bind(this);
  }

  search () {
    this.setState({searchResults: [1]})
  }

  render () {
    return (
      <Router>
        <Route
          path='/'
          activeStyle={{ color: 'red' }}
          component={Home}
        />
        <Route
          path='/home'
          activeStyle={{ color: 'red' }}
          component={Home}
        />
        <Route
          path='/basket'
          activeStyle={{ color: 'red' }}
          component={Basket}
        />
        <Route
          path='/search'
          activeStyle={{ color: 'red' }}
          component={Search}
          search = { this.search }
        />
        <Route
          path='/products'
          activeStyle={{ color: 'red' }}
          component={Products}
        />
        <Route
          path='/payment'
          activeStyle={{ color: 'red' }}
          component={Payment}
        />
      </Router>
    );
  }


}
// potential future routes
// import SearchBar from './searchbar/searchbar.jsx'
// import Products from './../modules/products.jsx'
// import ProductsCatagories from './../modules/productscatagories.jsx'
// import ProductsCatagoriesItem  from './../modules/productscatagoriesitem.jsx'
// import Basket from './../modules/basket.jsx'
// import Payment from './../modules/payment.jsx'
// /{params*} --- resource handler
// /404 --- page for 'not found'
render((
  <App/>
  ), document.getElementById('amazon'))
