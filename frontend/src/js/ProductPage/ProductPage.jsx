import React from 'react'
import Modal from 'react-modal'
import InfoBox from './InfoBox.jsx'
import Description from './Description.jsx'
import ReviewList from '../ReviewBox/ReviewList.jsx'
import ReviewBox from '../ReviewBox/ReviewBox.jsx'
require('../../css/grid.css')
require('../../css/review-box.css')

class ProductPage extends React.Component {
  constructor () {
    super()
    this.state = {
      product: {},
      reviewBool: false
    }
    this.setResultsState = this.setResultsState.bind(this)
    this.categorySelect = this.categorySelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getData () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let product = JSON.parse(xhr.responseText)
        product.reviews = JSON.parse(product.reviews)
        this.setState({ product })
      }
    }
    xhr.open('GET', `/getIndividualItem/${this.props.params.itemID}`) // eslint-disable-line
    xhr.send()
  }

  openReviewModal () {
    this.setState({
      reviewBool: true
    })
  }
  closeReviewModal () {
    this.setState({
      reviewBool: false
    })
    this.getData()
  }

  setResultsState (results) {
    this.props.changeState({ // eslint-disable-line
      searchResults: results
    })
  }
  categorySelect (e) {
    this.props.changeState({category: e.target.value }) // eslint-disable-line
  }
  handleChange (e) {
   this.props.changeState({input: e.target.value }) // eslint-disable-line
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    const modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        transition: '0.3s ease'
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        transition: '0.3s ease'
      }
    }

    return (
      <div className='page-margin'>
        <div className='container'>
          <div className='img-scale column-third'>
            <img src={this.state.product.imageLink} />
          </div>
          <InfoBox {...this.state.product} buttonText='add to basket' />
        </div>
        <Description {...this.state.product} />
        <button className='button-yellow' onClick={this.openReviewModal.bind(this)}>
          write a review
        </button>
        <Modal
          isOpen={this.state.reviewBool}
          style={modalStyles}>
          <ReviewBox
            id={this.state.product.id}
            closeReviewModal={this.closeReviewModal.bind(this)} />
        </Modal>
        <ReviewList reviews={this.state.product.reviews} />
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
  buttonType: React.PropTypes.string,
  route: React.PropTypes.object
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
  buttonText: 'Add to basket',
  buttonType: 'button-yellow'
}

export default ProductPage
