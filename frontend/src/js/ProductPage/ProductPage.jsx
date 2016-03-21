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
  quantity: React.PropTypes.number,
  buttonText: React.PropTypes.string.isRequired,
  buttonType: React.PropTypes.string
}

ProductPage.defaultProps = {
  productId: 12323123123112312321312312321221321321312312312321,
  imgUrl: 'https://www.fillmurray.com/g/200/300',
  itemName: 'An Amazing Product',
  price: '200',
  description: 'This is a description for our amazing product',
  reviews: '[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"nickname","text":"this product sucks!","rating":5,"date":1458218917974},{"author":"nickname","text":"this product sucks!","rating":5,"date":1458218917974}]', // (stringified array of review objects - can be empty)
  categories: '["Clothes", "Health and Beauty"]', // (stringified array)
  quantity: 5,
  buttonText: 'Buy',
  buttonType: 'button'
}

export default ProductPage
