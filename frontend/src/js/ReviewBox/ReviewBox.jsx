import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewBox extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
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
      text: e.target.value
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
    let text = this.state.text
    let rating = this.state.rating
    let date = Date.now()
    let id = this.props.id // eslint-disable-line

    console.log(author, text, rating, id)
    this.props.closeReviewModal() // eslint-disable-line

    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.responseText)
      }
    }
    xhr.open('POST', '/submitReview')
    xhr.send(JSON.stringify({ author, text, rating, date, id }))
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
        <button onClick={
            this.props.closeReviewModal.bind(this) // eslint-disable-line
          }>Close</button>
      </form>
    )
  }
}

export default ReviewBox
