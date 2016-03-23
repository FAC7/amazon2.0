import React from 'react'
import BasketContainer from './BasketContainer/index.jsx'
import { browserHistory } from 'react-router'

class BasketEntry extends React.Component {

  constructor () {
    super()
    let storage = window.localStorage
    let shoppingBasket = { items: [] }
    if (storage.length > 0 && storage.getItem('shoppingBasket')) {
      shoppingBasket = {items: JSON.parse(storage.getItem('shoppingBasket'))}
    }

    this.state = {
      shoppingBasket: shoppingBasket
    }

    this.deleteFunction = this.deleteFunction.bind(this)
    this.removeFunction = this.removeFunction.bind(this)
    this.restoreFunction = this.restoreFunction.bind(this)
    this.quantityFunction = this.quantityFunction.bind(this)
    this.quantityValidation = this.quantityValidation.bind(this)
    this.redirectClick = this.redirectClick.bind(this)
    this.itemCount = this.itemCount.bind(this)
    this.itemCost = this.itemCost.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  // componentWillMount () {
  //   // this can be removed when we get localStorage from adding items
  //   window.localStorage.setItem('shoppingBasket', JSON.stringify([{
  //     id: '111',
  //     itemName: 'Kärcher K4 Full Control Pressure Washer',
  //     url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
  //     currency: 'GBP',
  //     currencySymbol: '£',
  //     cost: 118.99,
  //     imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
  //     quantity: 1,
  //     stock: 10,
  //     deleted: false
  //   }, {
  //     id: '222',
  //     itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
  //     url: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
  //     currency: 'GBP',
  //     currencySymbol: '£',
  //     cost: 59.99,
  //     imgURL: 'http://ecx.images-amazon.com/images/I/51GYbTD1nxL._SL1296_.jpg',
  //     quantity: 2,
  //     stock: 11,
  //     deleted: false
  //   }]))
  // }

  quantityFunction (index) {
    return this.state.shoppingBasket.items[index].quantity
  }

  quantityValidation (index) {
    if (this.state.shoppingBasket.items[index].quantity === 0) {
      return 'quantity cannot be empty or 0'
    } else if (this.state.shoppingBasket.items[index].quantity > this.state.shoppingBasket.items[index].stock) {
      return 'only ' + this.state.shoppingBasket.items[index].stock + ' left in stock'
    }
  }

  deleteFunction (index) {
    this.state.shoppingBasket.items[index].deleted = true
    window.localStorage.setItem('shoppingBasket', JSON.stringify(this.state.shoppingBasket.items))
    this.setState(this.state)
  }

  removeFunction (index) {
    this.state.shoppingBasket.items = this.state.shoppingBasket.items.slice(0, index).concat(this.state.shoppingBasket.items.slice(index + 1))
    window.localStorage.setItem('shoppingBasket', JSON.stringify(this.state.shoppingBasket.items))
    this.setState(this.state)
  }

  restoreFunction (index) {
    this.state.shoppingBasket.items[index].deleted = false
    window.localStorage.setItem('shoppingBasket', JSON.stringify(this.state.shoppingBasket.items))
    this.setState(this.state)
  }

  redirectClick () {
    document.cookie = ('currency=' + this.state.shoppingBasket.items[0].currency)
    document.cookie = ('price=' + this.state.shoppingBasket.items[0].price)
    browserHistory.push('/checkout')
  }

  addItem (index) {
    let item = this.state.shoppingBasket.items[index]
    if (item.quantity < item.stock) {
      item.quantity++
      window.localStorage.setItem('shoppingBasket', JSON.stringify(this.state.shoppingBasket.items))
      this.setState(this.state)
    }
  }

  removeItem (index) {
    let item = this.state.shoppingBasket.items[index]
    if (item.quantity > 1) {
      item.quantity--
      window.localStorage.setItem('shoppingBasket', JSON.stringify(this.state.shoppingBasket.items))
      this.setState(this.state)
    }
  }

  itemCount () {
    let totalQuantity = this.state.shoppingBasket.items.reduce(function (prev, curr) {
      if (curr.quantity > curr.stock) {
        curr.quantity = 0
      }
      return prev + (curr.deleted === true ? 0 : curr.quantity)
    }, 0)
    let items = '(' + totalQuantity + ' items): '
    return items
  }

  itemCost () {
    let totalCost = this.state.shoppingBasket.items.reduce(function (prev, curr) {
      if (curr.quantity > curr.stock) {
        curr.quantity = 0
      }
      return prev + (curr.deleted === true ? 0 : (curr.price * curr.quantity))
    }, 0)
    let price = this.state.shoppingBasket.items[0].currencySymbol + ' ' + totalCost
    return price
  }

  render () {
    return (
    <BasketContainer
      shoppingBasket={this.state.shoppingBasket}
      deleteFunction={this.deleteFunction}
      removeFunction={this.removeFunction}
      restoreFunction={this.restoreFunction}
      redirectClick={this.redirectClick}
      numItems={this.itemCount}
      getPrice={this.itemCost}
      quantityFunction={this.quantityFunction}
      quantityValidation={this.quantityValidation}
      addItem={this.addItem}
      removeItem={this.removeItem}
      />
    )
  }
}

export default BasketEntry
