import React from 'react'
import FiveStars from '../Ratings/FiveStars.jsx'

class ReviewBox extends React.Component {
  constructor () {
    super()
    this.state = {
      review: '',
      author: '',
      star: ''
    }
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
      star: i
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.author, this.state.review, 'stars!!!', this.state.star)
  }

  render () {
    return (
    <form>
      <FiveStars {...this.props} clickStars={this.clickStars.bind(this)} />
      <input
        onChange={this.handleAuthor.bind(this)}
        type='text'
        name='author'
        placeholder='your name'
        required></input>
      <br/>
      <textarea onChange={this.handleReview.bind(this)} rows='4' columns='50'></textarea>
      <button onClick={this.handleSubmit.bind(this)} type='button'>
        Submit Review
      </button>
    </form>
    )
  }
}

export default ReviewBox
