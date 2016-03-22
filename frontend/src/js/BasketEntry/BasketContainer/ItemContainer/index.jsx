import React from 'react'
import Image from './Image.jsx'
import ItemName from './ItemName.jsx'
import Price from './Price.jsx'
import DeleteLink from './DeleteLink.jsx'
import Quantity from '../../../common/input.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'

class ItemContainer extends React.Component {

  render () {
    const item = this.props.itemInfo
    return (
    <tr>
      <td>
        <Image url={item.url} imageLink={item.imageLink} />
      </td>
      <td>
        <ItemName title={item.title} url={item.url} />
        <AdditionalInfo stock={item.stock} />
        <DeleteLink deleteFunction={this.props.deleteFunction} index={this.props.index} />
      </td>
      <td>
        <Price price={item.price} currencySymbol={item.currencySymbol} />
      </td>
      <td>
        <Quantity
          width='20px'
          key={this.props.index}
          onChange={this.props.quantityFunction.bind(null, this.props.index)}
          defaultValue={item.quantity} />
        <p style={styleP} index={this.props.index}>
          {this.props.quantityValidation(this.props.index)}
        </p>
      </td>
    </tr>
    )
  }
}
var styleP = {
  color: '#EA0047',
  fontSize: '0.8em'
}

ItemContainer.propTypes = {
  itemInfo: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  quantityFunction: React.PropTypes.func.isRequired,
  quantityValidation: React.PropTypes.func.isRequired
}

export default ItemContainer
