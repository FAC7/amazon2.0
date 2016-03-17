import React from 'react'
import InfoBox from './InfoBox.jsx'
import Description from './Description.jsx'
require('../../css/grid.css')

class ProductPage extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          <div className='img-scale column-third'>
            <img src={this.props.imgUrl} />
          </div>
          <InfoBox {...this.props} />
        </div>
        <Description {...this.props} />
      </div>
    )
  }
}

ProductPage.propTypes = {
  imgUrl: React.PropTypes.string.isRequired,
  itemName: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  averageRating: React.PropTypes.number.isRequired,
  description: React.PropTypes.string.isRequired,
  reviews: React.PropTypes.string, // (stringified array of review objects - can be empty)
  categories: React.PropTypes.string.isRequired, // (stringified array)
  buttonText: React.PropTypes.string.isRequired,
  buttonType: React.PropTypes.string
}

export default ProductPage
