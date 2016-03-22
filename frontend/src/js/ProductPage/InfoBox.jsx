import React from 'react'
import BuyProduct from './BuyProduct.jsx'
import FiveStars from '../Ratings/FiveStars.jsx'

class InfoBox extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.itemName}</h2>
        <FiveStars {...this.props} />
        <p>£{this.props.price}</p>
        <BuyProduct {...this.props} />
      </div>
    )
  }
}

export default InfoBox
