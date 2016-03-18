import React from 'react'
import Image from './Image.js'
import ItemName from './ItemName.js'
import Price from './Price.js'
import DeleteLink from './DeleteLink.js'
import Quantity from './Quantity.js'
import Stock from './Stock.js'

class ItemContainer extends React.Component {

  render () {
    const item = this.props.itemInfo
    return (
      <tr>
        <td>
          <Image url={item.url} imgURL={item.imgURL} />
        </td>
        <td>
          <ItemName itemName={item.itemName} url={item.url} />
          <DeleteLink deleteFunction={this.props.deleteFunction} index={this.props.index} />
        </td>
        <td>
          <Price cost={item.cost} currencySymbol={item.currencySymbol} />
        </td>
      </tr>
    )
  }
}

ItemContainer.propTypes = {
  itemInfo: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired
}

export default ItemContainer
