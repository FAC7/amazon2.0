import React from 'react'
import InfoBox from './InfoBox.jsx'
import Description from './Description.jsx'
require('../../css/grid.css')

class ProductPage extends React.Component {
  constructor () {
    super()
    this.state = {
      product: {}
    }
  }

  getData () {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        this.setState({ product: JSON.parse(xhr.responseText) })
        console.log(this.state)
      }
    }
    xhr.open('GET', 'http://localhost:4000/getIndividualItem/73bc50ee-fa1b-efdd-c3c4-f8355aa13b77')
    xhr.send()
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='img-scale column-third'>
            <img src={this.state.product.imageLink} />
          </div>
          <InfoBox {...this.state.product} buttonText='buy' />
        </div>
        <Description {...this.state.product}  />
      </div>
    )
  }
}

ProductPage.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  imageLink: React.PropTypes.string.isRequired,
  rating: React.PropTypes.string.isRequired,
  reviews: React.PropTypes.string, // (stringified array of review objects - can be empty)
  description: React.PropTypes.string.isRequired,
  stock: React.PropTypes.number.isRequired,
  categories: React.PropTypes.string.isRequired, // (stringified array)
  buttonText: React.PropTypes.string.isRequired,
  buttonType: React.PropTypes.string
}

ProductPage.defaultProps = {
  id: '383a13e3-ad02-e854-fbb0-858a628a3809',
  title: 'An Amazing Product',
  price: '200',
  imageLink: 'https://www.fillmurray.com/g/200/300',
  rating: '4',
  reviews: '[{"author":"nickname","text":"this product sucks!","rating":1,"date":1458218917974},{"author":"nickname","text":"this product sucks!","rating":5,"date":1458218917974},{"author":"nickname","text":"this product sucks!","rating":5,"date":1458218917974}]', // (stringified array of review objects - can be empty)
  description: 'This is a description for our amazing product',
  stock: 12,
  categories: '["Clothes", "Health and Beauty"]', // (stringified array)
  buttonText: 'Buy',
  buttonType: 'button'
}

export default ProductPage
