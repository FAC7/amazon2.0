import React from 'react'
import ProductPage from '../ProductPage/ProductPage.jsx'

class BasketState extends React.Component {
  constructor () {
    super()
    this.state = {
      basket: []
    }
    this.formatItem = this.formatItem.bind(this)
    this.addToBasket = this.addToBasket.bind(this)
  }

  formatItem (item) {
    return {
      productId: item.productId,
      itemName: item.itemName,
      url: 'localhost://8080/product' + item.productId,
      currency: 'GBP',
      currencySymbol: '£',
      cost: item.price,
      imgURL: item.imgUrl,
      quantity: item.numberChosen,
      stock: item.quantity,
      deleted: false
    }
  }

  addToBasket (item) {
    const formatted = this.formatItem(item)
    const basket = this.state.basket.push(formatted)
    this.setState({basket: basket})
    console.log(this.state)
  }

  render () {
    return (
    <span><ProductPage addToBasket={this.addToBasket} /></span>
    )
  }
}

export default BasketState
