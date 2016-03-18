import React from 'react'
import Slider from './Slider.jsx'

class Category extends React.Component {
  render () {
    const categoryName = this.props.categoryName
    return (
          <div className='category'>
              <h2>{categoryName}</h2>
                <Slider />
          </div>
    )
  }
}

export default Category
