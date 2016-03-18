import React from 'react'
import ItemContainer from './ItemContainer/'
import DeletedItemContainer from './ItemContainer/DeletedItemContainer.js'
import TableHeading from './TableHeaders/'
import CheckoutContainer from './CheckoutContainer/'

class BasketContainer extends React.Component {

  render () {
    return (
      <div>
        <table>
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
                  <ItemContainer index={index} key={index} itemInfo={item} deleteFunction={this.props.deleteFunction} />
                )
              } else {
                return (
                  <DeletedItemContainer span='3' index={index} key={index} itemInfo={item} removeFunction={this.props.removeFunction} restoreFunction={this.props.restoreFunction} />
                )
              }
            })}
          </tbody>
        </table>
        <CheckoutContainer redirectClick={this.props.redirectClick} numItems={this.props.numItems} getPrice={this.props.getPrice}/>
      </div>
    )
  }
}

BasketContainer.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func,
  removeFunction: React.PropTypes.func,
  restoreFunction: React.PropTypes.func,
  redirectClick: React.PropTypes.func,
  numItems: React.PropTypes.func,
  getPrice: React.PropTypes.func
}

export default BasketContainer
