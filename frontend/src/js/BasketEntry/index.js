import React from 'react'
import BasketContainer from './BasketContainer/'

const shoppingBasket = {
  items: [{
    itemName: 'Kärcher K4 Full Control Pressure Washer',
    url: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
    price: '£118.99',
    imgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
    quantity: 1,
    stock: 11,
    deleted: false
  }, {
    itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
    url: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
    price: '£59.99',
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

  render () {
    return (
      <BasketContainer shoppingBasket={this.state.shoppingBasket} deleteFunction={this.deleteFunction} removeFunction={this.removeFunction} restoreFunction={this.restoreFunction}/>
    )
  }
}
export default BasketEntry
