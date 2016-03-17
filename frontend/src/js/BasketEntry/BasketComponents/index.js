import React from 'react'

import ItemContainer from './ItemContainer/'

class BasketComponents extends React.Component {

  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {this.props.shoppingBasket.items.map((item, index) => {
            return (
                <ItemContainer key={index} itemInfo={item} />
            )
          })}
        </tbody>
      </table>
    )
  }

}

BasketComponents.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired
}

export default BasketComponents
