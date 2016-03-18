import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Login from './../modules/login.jsx'
// import Products from './../modules/products.jsx'
// import ProductsCatagories from './../modules/productscatagories.jsx'
// import ProductsCatagoriesItem  from './../modules/productscatagoriesitem.jsx'
// import Basket from './../modules/basket.jsx'
// import Payment from './../modules/payment.jsx'
import { Router, Route, } from 'react-router'


// /{params*} --- resource handler
// /404 --- page for 'not found'



render((
  <Router >
    <Route path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('amazon'))



// <Route path="/products" component={Products}/>
// <Route path="/basket" component={Basket}/>
// <Route path="/payment" component={Payment}/>
