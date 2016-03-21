import React from 'react'
import BasketContainer from './BasketContainer/'

class BasketEntry extends React.Component {

  constructor () {
    super()
    let storage = localStorage
    // if (storage.length > 0 && storage.getItem('shoppingBasket')) {
    //   let shoppingBasket = { items: JSON.parse(storage.getItem('shoppingBasket'))}
    //   this.state = {
    //     shoppingBasket: shoppingBasket
    //   }
    // } else {
    //   this.state = {
    //     shoppingBasket: { items: [] }
    //   }
    // }
    let shoppingBasket = { items: [] }
    if (storage.length > 0 && storage.getItem('shoppingBasket')) {
      shoppingBasket = { items: JSON.parse(storage.getItem('shoppingBasket'))}
    }

    this.state = {
      shoppingBasket: shoppingBasket
    }

    this.deleteFunction = this.deleteFunction.bind(this)
    this.removeFunction = this.removeFunction.bind(this)
    this.restoreFunction = this.restoreFunction.bind(this)
    this.quantityFunction = this.quantityFunction.bind(this)
    this.redirectClick = this.redirectClick.bind(this)
    this.itemCount = this.itemCount.bind(this)
    this.itemCost = this.itemCost.bind(this)
  }

  componentWillMount () {
    localStorage.setItem('shoppingBasket', JSON.stringify([{
      id: '111',
      itemName: 'Kärcher K4 Full Control Pressure Washer',
      url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
      currency: 'GBP',
      currencySymbol: '£',
      cost: 118.99,
      imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
      quantity: 1,
      stock: 10,
      deleted: false
    }, {
      id: '222',
      itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
      url: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
      currency: 'GBP',
      currencySymbol: '£',
      cost: 59.99,
      imgURL: 'http://ecx.images-amazon.com/images/I/51GYbTD1nxL._SL1296_.jpg',
      quantity: 2,
      stock: 11,
      deleted: false
    }]))
  }

  quantityFunction (index, e) {
    if (e.target.value !== '' && !isNaN(Number(e.target.value))) {
      this.state.shoppingBasket.items[index].quantity = Number(e.target.value)
      this.setState(this.state)
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
      return prev + (curr.deleted === true ? 0 : curr.quantity)
    }, 0)
    let items = '(' + totalQuantity + ' items): '
    return items
  }

  itemCost () {
    let totalCost = this.state.shoppingBasket.items.reduce(function (prev, curr) {
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
      quantityFunction={this.quantityFunction} />
    )
  }
}

export default BasketEntry

const shoppingBasket = {
  items: [{
    id: '111',
    itemName: 'Kärcher K4 Full Control Pressure Washer',
    url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
    currency: 'GBP',
    currencySymbol: '£',
    cost: 118.99,
    imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
    quantity: 1,
    stock: 10,
    deleted: false
  }, {
    id: '222',
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
