import React from 'react'
import { Link } from 'react-router'

class Item extends React.Component {
  render () {
    const itemName = this.props.itemName
    const price = this.props.price
    const imageUrl = this.props.imageUrl
    return (
      <div className='item'>
        <Link to={
            `/item/${this.props.itemID}` // eslint-disable-line
          }>
          <h4>{itemName}</h4>
          <div className='img-box'>
            <p className='priceBox'>
              {price}
            </p>
            <img src={imageUrl} />
          </div>
        </Link>
      </div>
    )
  }
}

Item.propTypes = {
  itemName: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired
}

export default Item
