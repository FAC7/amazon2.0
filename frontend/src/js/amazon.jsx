import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import Header from './Header/index.jsx'
import Footer from './footer/footer.js'
import Category from './itemCategory/Category.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import SearchResults from './SearchResults/index.jsx'
import Basket from './BasketEntry/index.jsx'
import Checkout from './Checkout/index.jsx'
import PaymentStatus from './PaymentStatus/index.jsx'

require('../css/main.css')

const App = React.createClass({
  getInitialState () {
    return {
      searchResults: [],
      input: '',
      category: 'global',
      history: [],
      sort: 'price-asc'
    }
  },

  changeState (change) {
    console.log('CHANGING STATE: ', change)
    this.setState(change)
  },

  render () {
    const ChildWithProps = React.cloneElement(
      this.props.children, // eslint-disable-line
      {
        state: this.state,
        changeState: this.changeState
      }
    )

    return (
      <div>
        <Header changeState={this.changeState} />
        <main>
          {ChildWithProps}
        </main>
        <Footer />
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Category} />
      <Route path='basket' component={Basket} />
      <Route path='checkout' component={Checkout} />
      <Route path='payment-status' component={PaymentStatus} />
      <Route path='item/:itemID' component={ProductPage} />
      <Route path='searchResults' component={SearchResults} />
    </Route>
  </Router>
), document.getElementById('amazon'))
