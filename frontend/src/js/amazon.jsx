import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Login from './../modules/login.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
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
    <Route path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/productspage' component={ProductPage} />
  </Router>
  ), document.getElementById('amazon'))

// <Route path='/products' component={Products}/>
  // <Route path='/basket' component={Basket}/>
  // <Route path='/payment' component={Payment}/>
