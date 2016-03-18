import React from 'react'
import ItemContainer from './ItemContainer/'
import DeletedItemContainer from './ItemContainer/DeletedItemContainer.js'
import TableHeading from './TableHeaders/'
import CheckoutContainer from './CheckoutContainer/'

class BasketContainer extends React.Component {

  render () {
    return (
      <div>
        <table cellPadding='10'>
          <tbody>
            <tr>
              <TableHeading headingName='' span='1'/>
              <TableHeading headingName='Item' span='1'/>
              <TableHeading headingName='Price' />
              <TableHeading headingName='Quantity' span='2'/>
            </tr>
            {this.props.shoppingBasket.items.map((item, index) => {
              if (!item.deleted) {
                return (
                  <ItemContainer index={index} key={index} itemInfo={item} deleteFunction={this.props.deleteFunction} quantityFunction={this.props.quantityFunction}/>
                )
              } else {
                return (
                  <DeletedItemContainer span='3' index={index} key={index} itemInfo={item} removeFunction={this.props.removeFunction} restoreFunction={this.props.restoreFunction} />
                )
              }
            })}
          </tbody>
        </table>
        <CheckoutContainer />
      </div>
    )
  }
}

BasketContainer.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func,
  removeFunction: React.PropTypes.func,
  restoreFunction: React.PropTypes.func,
  quantityFunction: React.PropTypes.func
}

export default BasketContainer
