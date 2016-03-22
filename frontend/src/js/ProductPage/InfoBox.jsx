import React from 'react'
import BuyProduct from './BuyProduct.jsx'
import FiveStars from '../Ratings/FiveStars.jsx'

class InfoBox extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <FiveStars {...this.props} />
        <p>£{this.props.price}</p>
        <BuyProduct formatItem={this.props.formatItem} {...this.props} />
      </div>
    )
  }
}

export default InfoBox
