import React from 'react'
import { render } from 'react-dom'
import SearchBar from './searchbar/searchbar.jsx'
import { Router, Route } from 'react-router'
require('../css/main.css')

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
  <Router>
    <Route path='/' component={SearchBar} />
  </Router>
  ), document.getElementById('amazon'))
