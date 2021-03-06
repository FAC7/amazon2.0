import React from 'react'
import ItemContainer from './ItemContainer/index.jsx'
import DeletedItemContainer from './ItemContainer/DeletedItemContainer.jsx'
import TableHeading from './TableHeaders/index.jsx'
import CheckoutContainer from './CheckoutContainer/index.jsx'

class BasketContainer extends React.Component {

  render () {
    const items = this.props.shoppingBasket.items
    return (
      <div>
        <div className='container'>
          {items.length === 0
            ? <h1>Shopping Basket is Empty</h1> : <table className='column-fifth' style={rowStyle} cellPadding='10'>
              <tbody>
                <tr>
                  <TableHeading headingName='' span='1' />
                  <TableHeading headingName='Item' span='1' />
                  <TableHeading headingName='Price' />
                  <TableHeading headingName='Quantity' span='2' />
                </tr>
                {items.map((item, index) => {
                  if (!item.deleted) {
                    return (
                      <ItemContainer
                        index={index}
                        key={index}
                        itemInfo={item}
                        deleteFunction={this.props.deleteFunction}
                        quantityFunction={this.props.quantityFunction}
                        quantityValidation={this.props.quantityValidation}
                        addItem={this.props.addItem}
                        removeItem={this.props.removeItem} />
                    )
                  } else {
                    return (
                      <DeletedItemContainer
                        span='3'
                        index={index}
                        key={index}
                        itemInfo={item}
                        removeFunction={this.props.removeFunction}
                        restoreFunction={this.props.restoreFunction} />
                     )
                  }
                })}
              </tbody>
            </table>}
          {items.length > 0 ? <CheckoutContainer redirectClick={this.props.redirectClick} numItems={this.props.numItems} getPrice={this.props.getPrice} /> : <p></p>}
        </div>
      </div>
    )
  }
}

const rowStyle = {
  borderCollapse: 'collapse',
  borderBottom: '1px solid grey'
}

BasketContainer.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func,
  removeFunction: React.PropTypes.func,
  restoreFunction: React.PropTypes.func,
  quantityFunction: React.PropTypes.func,
  quantityValidation: React.PropTypes.func,
  redirectClick: React.PropTypes.func,
  numItems: React.PropTypes.func,
  getPrice: React.PropTypes.func,
  addItem: React.PropTypes.func,
  removeItem: React.PropTypes.func,
  counter: React.PropTypes.func
}

export default BasketContainer
