import React from 'react'
import Image from './Image.jsx'
import ItemName from './ItemName.jsx'
import Price from './Price.jsx'
import DeleteLink from './DeleteLink.jsx'
import Quantity from '../../../common/input.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'

const style = {
  fontSize: '20px',
  verticalAlign: 'top',
  padding: '40px',
  marginTop: '0px',
  borderTop: '1px solid grey',
  borderCollapse: 'collapse',
  color: '#EA0047'
}


class ItemContainer extends React.Component {

  render () {

    const item = this.props.itemInfo
    return (
      <tr>
        <td style={style}>
          <Image url={item.url} imgURL={item.imgURL} />
        </td>
        <td style={style}>
          <ItemName itemName={item.itemName} url={item.url} />
          <AdditionalInfo stock={item.stock} />
          <DeleteLink deleteFunction={this.props.deleteFunction} index={this.props.index} />
        </td>
        <td style={style}>
          <Price cost={item.cost} currencySymbol={item.currencySymbol} />
        </td>
        <td style={style}>
          <Quantity
            width='20px'
            height='20px'
            fontsize='20px'
            key={this.props.index}
            onChange={this.props.quantityFunction.bind(null, this.props.index)}
            defaultValue={item.quantity} />
          <p style={styleP} index={this.props.index}>
            {this.props.quantityIsEmpty(this.props.index)}
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
  quantityIsEmpty: React.PropTypes.func.isRequired
}

export default ItemContainer
