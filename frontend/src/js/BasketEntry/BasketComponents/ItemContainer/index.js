import React from 'react'
import Image from './Image.js'
import ItemName from './ItemName.js'
import Price from './Price.js'
import DeleteItem from './DeleteItem.js'
import Quantity from './Quantity.js'
import Stock from './Stock.js'

class ItemContainer extends React.Component {

  render () {
    const item = this.props.itemInfo
    return (
      <tr>
        <td><Image url={item.url} imgURL={item.imgURL} /></td>
        <td><ItemName itemName={item.itemName} url={item.url} /></td>
      </tr>
    )
  }
}

ItemContainer.propTypes = {
  itemInfo: React.PropTypes.object.isRequired
}

// <ItemName itemURL={item.itemURL} itemName={item.itemName} />
// <BasketImgItem itemImgURL={item.itemImgURL} />
// <td><Image /></td>
// <td><ItemName /></td>
// <td><Price /></td>
// <td><DeleteItem /></td>
// <td><Quantity /></td>
// <td><Stock /></td>
export default ItemContainer
