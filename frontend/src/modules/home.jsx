import React from 'react'
import { Link } from 'react-router'
import Category from './../js/itemCategory/Category.jsx'
import ProductPage from './../js/ProductPage/ProductPage.jsx'


export default React.createClass({

render() {
  return (
    <div>
      <h1>Amazon 2.0 Home Page</h1>
        <Category categoryName='category name' />
      // <ProductPage />
      <ul role="nav">
      <li><Link to="/home" activeStyle={{ color: 'red' }}>Home</Link></li>
      <li><Link to="/basket" activeStyle={{ color: 'red' }}>Basket</Link></li>
      <li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
      <li><Link to="/payment" activeStyle={{ color: 'red' }}>Payment</Link></li>
      <li><Link to="/productspage" activeStyle={{ color: 'red' }}>Products page</Link></li>
      </ul>

      {this.props.children}

    </div>
  );
}
});

// <h2>{categoryName}</h2>
