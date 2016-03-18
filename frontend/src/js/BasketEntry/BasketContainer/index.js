import React from 'react'
import ItemContainer from './ItemContainer/'
import DeletedItemContainer from './ItemContainer/DeletedItemContainer.js'

class BasketContainer extends React.Component {

  componentWillMount () {
    this.props.filterDeletedItems()
  }

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
            if (!item.deleted) {
              return (
                <ItemContainer index={index} key={index} itemInfo={item} deleteFunction={this.props.deleteFunction} />
              )
            } else {
              return (
                <DeletedItemContainer index={index} key={index} itemInfo={item} removeFunction={this.props.removeFunction} restoreFunction={this.props.restoreFunction} />
              )
            }
          })}
        </tbody>
      </table>
    )
  }

}

BasketContainer.propTypes = {
  shoppingBasket: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func,
  removeFunction: React.PropTypes.func,
  restoreFunction: React.PropTypes.func,
  filterDeletedItems: React.PropTypes.func
}

export default BasketContainer
