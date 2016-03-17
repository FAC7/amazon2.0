import React from 'react'

import ItemContainer from './ItemContainer/'

import TableHeading from './TableHeaders/'

import CheckoutContainer from './CheckoutContainer/'

class BasketComponents extends React.Component {

  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <TableHeading HeadingName='Item' />
              <TableHeading HeadingName='Price' />
              <TableHeading HeadingName='Quantity' />
            </tr>
            {this.props.shoppingBasket.items.map((item, index) => {
              return (
                  <ItemContainer key={index} itemInfo={item} />
              )
            })}
          </tbody>
        </table>
        <CheckoutContainer />
      </div>
    )
  }

}

BasketComponents.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired
}

export default BasketComponents
