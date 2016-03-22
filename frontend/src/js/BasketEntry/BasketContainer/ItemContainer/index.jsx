import React from 'react'
import Image from './Image.jsx'
import ItemName from './ItemName.jsx'
import Price from './Price.jsx'
import DeleteLink from './DeleteLink.jsx'
import Quantity from '../../../common/input.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'

class ItemContainer extends React.Component {
  // quantityFunction (e) {
  //   console.log('clicked at ' + e.target.value , 'index is : ' + this.props.index)
  //   console.log(this)
  // if (e.target.value !== '' && !isNaN(Number(e.target.value))) {
  //   this.state.shoppingBasket.items[this.props.index].quantity = e.target.value
  //   console.log(this.state.shoppingBasket.items[this.props.index].quantity)
  //   this.setState(this.state)
  // }
  // }

  render () {
    const item = this.props.itemInfo
    return (
    <tr>
      <td>
        <Image url={item.url} imgURL={item.imgURL} />
      </td>
      <td>
        <ItemName itemName={item.itemName} url={item.url} />
        <AdditionalInfo stock={item.stock} />
        <DeleteLink deleteFunction={this.props.deleteFunction} index={this.props.index} />
      </td>
      <td>
        <Price cost={item.cost} currencySymbol={item.currencySymbol} />
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
