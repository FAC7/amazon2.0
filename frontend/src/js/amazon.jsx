import React from 'react'
import { render } from 'react-dom'
import Home from './../modules/home.jsx'
import Login from './../modules/login.jsx'
import ReactDom from 'react-dom'
import BasketEntry from './BasketEntry/'
import Category from './itemCategory//Category.jsx'
import SearchBar from './searchbar/searchbar.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
require('../css/main.css')
// import Products from './../modules/products.jsx'
// import ProductsCatagories from './../modules/productscatagories.jsx'
// import ProductsCatagoriesItem  from './../modules/productscatagoriesitem.jsx'
// import Basket from './../modules/basket.jsx'
// import Payment from './../modules/payment.jsx'
import { Router, Route } from 'react-router'

// /{params*} --- resource handler
// /404 --- page for 'not found'

render((
  <Router >
    <Route path='/' component={Home}/>
    <Route path='/home' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/basket' component={BasketEntry}/>
  </Router>
), document.getElementById('amazon'))

// <Route path='/products' component={Products}/>
// <Route path='/basket' component={Basket}/>
// <Route path='/payment' component={Payment}/>


// class Amazon extends React.Component {
//   render () {
//     return (
//     <div>
//       <p>
//         Amazon sucks, fAC7 is better!!!
//       </p>
//       <Category categoryName='category name' />
//       <Category categoryName='bouh' />
//     <ProductPage />
//     </div>
//     )
//   }
// }
//
// ReactDom.render(
//   <Amazon />,
//   document.getElementById('amazon')
// )
