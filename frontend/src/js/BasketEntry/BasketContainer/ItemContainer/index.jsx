import React from 'react'
import Image from './Image.jsx'
import ItemName from './ItemName.jsx'
import Price from './Price.jsx'
import DeleteLink from './DeleteLink.jsx'
import Button from './Button.jsx'
import Quantity from './QuantityCount.jsx'
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

const buttonStyle = {
  display: '-webkit-inline-box'
}

class ItemContainer extends React.Component {

  render () {

    const item = this.props.itemInfo
    return (
      <tr>   
        <td style={style}>
          <Image url={item.url} imageLink={item.imageLink} />
        </td>
        <td style={style}>
          <ItemName title={item.title} url={item.url} />
          <AdditionalInfo stock={item.stock} />
          <DeleteLink deleteFunction={this.props.deleteFunction} index={this.props.index} />
        </td>
        <td style={style}>
          <Price price={item.price} currencySymbol={item.currencySymbol} />
        </td>
        <td>
          <div style={buttonStyle}>
            <Button handleClick={this.props.removeItem} index={this.props.index} buttonText='-' />
            <Quantity counter={this.props.quantityFunction(this.props.index)} />
            <Button handleClick={this.props.addItem} index={this.props.index} buttonText='+' />
          </div>
        </td>
      </tr>
    )
  }
}

ItemContainer.propTypes = {
  itemInfo: React.PropTypes.object.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  quantityFunction: React.PropTypes.func.isRequired,
  quantityValidation: React.PropTypes.func.isRequired,
  addItem: React.PropTypes.func,
  removeItem: React.PropTypes.func,
  counter: React.PropTypes.func
}

export default ItemContainer
