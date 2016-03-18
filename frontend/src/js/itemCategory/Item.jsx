import React from 'react'

class Item extends React.Component {
  render () {
    const itemName = this.props.itemName
    const price = this.props.price
    const imageUrl = this.props.imageUrl
    const link = this.props.link
    return (
      <div className='item'>
        <a href={link}>
          <h4>{itemName}</h4>
        </a>

        <div className='img-box'>
          <p className='priceBox'>{price}</p>
          <a href={link}>
            <img src={imageUrl}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Item
