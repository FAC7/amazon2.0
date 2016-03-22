import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Products from './../modules/products.jsx'
import BasketEntry from './BasketEntry/index.jsx'
import Search from './../modules/search.jsx'
import Payment from './../modules/payment.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'

// import ReactDom from 'react-dom'
// import Category from './itemCategory/Category.jsx'
// import SearchBar from './searchbar/searchbar.jsx'
// import ProductPage from './ProductPage/ProductPage.jsx'
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
    <Route path='/' activeStyle={{ color: 'red' }}component={Home} />
    <Route path='/home' activeStyle={{ color: 'red' }}component={Home} />
    <Route path='/basket' activeStyle={{ color: 'red' }}component={BasketEntry} />
    <Route path='/search' activeStyle={{ color: 'red' }}component={Search} />
    <Route path='/products' activeStyle={{ color: 'red' }}component={Products} />
    <Route path='/payment' activeStyle={{ color: 'red' }} component={Payment} />
    <Route path='/item/:itemID' component={ProductPage} />
  </Router>
  ), document.getElementById('amazon'))
