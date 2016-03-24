import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewBox extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      author: '',
      rating: 0,
      reviewError: false
    }
    this.handleAuthor = this.handleAuthor.bind(this)
    this.handleReview = this.handleReview.bind(this)
    this.clickStars = this.clickStars.bind(this)
    this.submitReview = this.submitReview.bind(this)
  }

  handleAuthor (e) {
    e.preventDefault()
    this.setState({
      author: e.target.value
    })
  }

  handleReview (e) {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  clickStars (i) {
    this.setState({
      rating: i
    })
  }

  formatDate () {
    return new Date().toString().split(' ').slice(0, 4).join(' ')
  }

  submitReview (e) {
    e.preventDefault()
    let author = this.state.author
    let text = this.state.text
    let rating = this.state.rating
    if (author && rating && text) {
      this.setState({ reviewError: false })
      let date = this.formatDate()
      let id = this.props.id
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          this.props.closeReviewModal()
        }
      }
      xhr.open('POST', '/submitReview')
      xhr.send(JSON.stringify({ author, text, rating, date, id }))
    } else {
      this.setState({ reviewError: true })
    }
  }

  render () {
    return (
      <form className='review-box'>
        <FiveStars {...this.props} clickStars={this.clickStars} rating={this.state.rating} />
        <input
          className='review-author'
          onChange={this.handleAuthor}
          type='text'
          name='author'
          placeholder='your name'
          required></input>
        <br/>
        <textarea className='review-text' onChange={this.handleReview} placeholder='your review here' required></textarea>
        <button className='button-yellow' onClick={this.submitReview} type='button'>
          Submit Review
        </button>
        <button
          onClick={this.props.closeReviewModal.bind(this)}
          className='button-yellow'
          >Close</button>
        <p className={this.state.reviewError ? 'show' : 'hide'}>Please fill in all the fields</p>
      </form>
    )
  }
}

ReviewBox.propTypes = {
  id: React.PropTypes.string,
  closeReviewModal: React.PropTypes.func
}

export default ReviewBox
