import React from 'react'
import Slider from './Slider.jsx'

class Category extends React.Component {
  render () {
    const categoryName = this.props.categoryName
    return (
      <div className='category'>
        <Slider />
      </div>
    )
  }
}

export default Category
