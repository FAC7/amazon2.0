import React from 'react'
import Button from './Button.jsx'

class BuyProduct extends React.Component {
  constructor () {
    super()
    this.state = {
      quantitySelected: 1
    }
  }

  handleOptions (e) {
    const selected = e.target.options.selectedIndex
    this.setState({
      quantitySelected: selected + 1
    })
  }

  formatItem (item) {
    return {
      id: item.id,
      title: item.title,
      url: 'localhost://8080/product' + item.id,
      currency: 'GBP',
      currencySymbol: '£',
      price: item.price,
      imageLink: item.imageLink,
      stock: item.stock,
      quantitySelected: this.state.quantitySelected,
      deleted: false
    }
  }

  checkBasketIndex (basket, itemId) {
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
    const basket = JSON.parse(localStorage.getItem('shoppingBasket'))
    const basketIndex = this.checkBasketIndex(basket, item.id)
    // console.log('basket=', basket)
    if (basketIndex > -1) {
      basket[basketIndex].quantitySelected += this.state.quantitySelected
      localStorage.setItem('shoppingBasket', JSON.stringify(basket))
    } else if (basket) {
      basket.push(formatted)
      localStorage.setItem('shoppingBasket', JSON.stringify(basket))
    } else {
      localStorage.setItem('shoppingBasket', JSON.stringify([formatted]))
    }
    console.log('shoppingbasketitem---', localStorage.getItem('shoppingBasket'))
  // localStorage.removeItem('shoppingBasket')
  }

  createOptions () {
    let stock = this.props.stock
    if (stock > 0) {
      let options = []
      let i = 1
      while (i <= stock) {
        options.push(<option value={i}>{i}</option>)
        i++
      }
      return (
        <div>
          <select onChange={this.handleOptions.bind(this)}>
            {options}
          </select>
          <Button addToBasket={this.addToBasket.bind(this)} {...this.props} />
        </div>
      )
    } else {
      return (
        <p>Out of stock</p>
      )
    }
  }

  render () {
    return (
    <div>
      {this.createOptions()}
      <p>
        {this.props.stock} items left
      </p>
    </div>
    )
  }
}

export default BuyProduct
