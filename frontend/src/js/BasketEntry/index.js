import React from 'react'
import BasketContainer from './BasketContainer/'

const shoppingBasket = {
  items: [{
    itemName: 'Kärcher K4 Full Control Pressure Washer',
    url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
    currency: 'GBP',
    currencySymbol: '£',
    cost: 118.99,
    imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
    quantity: 4,
    stock: 10,
    deleted: false
  }, {
    itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
    url: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
    currency: 'GBP',
    currencySymbol: '£',

    cost: 59.99,
    imgURL: 'http://ecx.images-amazon.com/images/I/51GYbTD1nxL._SL1296_.jpg',
    quantity: 2,
    stock: 11,
    deleted: false
  }]
}

class BasketEntry extends React.Component {
  constructor () {
    super()
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
  }

  quantityFunction (index, e) {
    if (!isNaN(Number(e.target.value))) {
      this.state.shoppingBasket.items[index].quantity = Number(e.target.value)
      this.setState(this.state)
    }
  }

  quantityValidation(index) {
    if (this.state.shoppingBasket.items[index].quantity === 0) {
      return "quantity cannot be empty or 0"
    } else if (this.state.shoppingBasket.items[index].quantity > this.state.shoppingBasket.items[index].stock) {
      return "only " + this.state.shoppingBasket.items[index].stock + " left in stock"
    }
  }


  deleteFunction (index) {
    this.state.shoppingBasket.items[index].deleted = true
    this.setState(this.state)
  }

  removeFunction (index) {
    this.state.shoppingBasket.items = this.state.shoppingBasket.items.slice(0, index).concat(this.state.shoppingBasket.items.slice(index + 1))
    this.setState(this.state)
  }

  restoreFunction (index) {
    this.state.shoppingBasket.items[index].deleted = false
    this.setState(this.state)
  }

  redirectClick () {
    document.cookie = ('currency=' + this.state.shoppingBasket.items[0].currency)
    document.cookie = ('price=' + this.state.shoppingBasket.items[0].cost)
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
      return prev + (curr.deleted === true ? 0 : (curr.cost * curr.quantity))
    }, 0)
    let cost = this.state.shoppingBasket.items[0].currencySymbol + ' ' + totalCost
    return cost
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
      />
    )
  }
}

export default BasketEntry
