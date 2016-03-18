import React from 'react'

class Review extends React.Component {
  render () {
    return (
    <div>
      <input type='text' name='author' placeholder='your name' required></input>
      <br/>
      <textarea rows='4' columns='50'></textarea>
    </div>
    )
  }
}

export default Review
