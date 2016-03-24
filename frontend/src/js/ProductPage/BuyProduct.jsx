import React from 'react'
import Button from './Button.jsx'

class BuyProduct extends React.Component {
  constructor () {
    super()
    this.state = {
      quantity: 1
    }
  }

  handleOptions (e) {
    const selected = e.target.options.selectedIndex
    this.setState({
      quantity: selected + 1
    })
  }

  formatItem (item) {
    return {
      id: item.id,
      title: item.title,
      url: '/item/' + item.id,
      currency: 'GBP',
      currencySymbol: '£',
      price: +(item.price),
      imageLink: item.imageLink,
      stock: item.stock,
      quantity: this.state.quantity,
      deleted: false
    }
  }

  addToLocal (item) {
    localStorage.setItem('shoppingBasket', JSON.stringify(item)) // eslint-disable-line
  }

  itemInBasketIndex (basket, itemId) {
    let basketIndex
    if (basket) {
      basket.forEach((item, i) => {
        if (item.id === itemId) basketIndex = i
      })
    } else {
      basketIndex = -1
    }
    return basketIndex
  }

  addToBasket (item) {
    const formatted = this.formatItem(item)
    const basket = JSON.parse(localStorage.getItem('shoppingBasket')) // eslint-disable-line
    const basketIndex = this.itemInBasketIndex(basket, item.id)

    if (basketIndex > -1) {
      basket[basketIndex].quantity += this.state.quantity
      this.addToLocal(basket)
    } else if (basket) {
      basket.push(formatted)
      this.addToLocal(basket)
    } else {
      this.addToLocal([formatted])
    }
    console.log('shoppingbasketitem---', localStorage.getItem('shoppingBasket')) // eslint-disable-line
  // localStorage.removeItem('shoppingBasket')
  }

  generateOptions () {
    let stock = this.props.stock // eslint-disable-line
    let options = []
    for (let i = 1; i <= stock; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return options
  }

  createDropdown () {
    if (this.props.stock > 0) { // eslint-disable-line
      return (
        <div>
          <select className='select-product' onChange={this.handleOptions.bind(this)}>
            {this.generateOptions()}
          </select>
          <Button addToBasket={this.addToBasket.bind(this)} {...this.props} />
        </div>
      )
    } else {
      return (
        <p>
          Out of stock
        </p>
      )
    }
  }

  render () {
    return (
      <div>
        <div>
          {this.createDropdown()}
        </div>
        <p>
          {this.props.stock} items left
        </p>
      </div>
    )
  }
}

BuyProduct.propTypes = {
  stock: React.PropTypes.string
}

export default BuyProduct
