import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewBox extends React.Component {
  constructor () {
    super()
    this.state = {
      review: '',
      author: '',
      rating: 0
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
      review: e.target.value
    })
  }

  clickStars (i) {
    this.setState({
      rating: i
    })
  }

  submitReview (e) {
    e.preventDefault()
    let author = this.state.author
    let review = this.state.review
    let rating = this.state.rating

    console.log(author, review, rating)
  }

  render () {
    return (
    <form>
      <FiveStars {...this.props} clickStars={this.clickStars} rating={this.state.rating} />
      <input
        onChange={this.handleAuthor}
        type='text'
        name='author'
        placeholder='your name'
        required></input>
      <br/>
      <textarea onChange={this.handleReview} rows='4' columns='50'></textarea>
      <button onClick={this.submitReview} type='button'>
        Submit Review
      </button>
    </form>
    )
  }
}

export default ReviewBox
