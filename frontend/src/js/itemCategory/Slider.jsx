import React from 'react'
import Item from './Item.jsx'
import Slick from 'react-slick'

class Slider extends React.Component {

  constructor () {
    super()
    this.state = {categoryArray: []}
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const parsed = JSON.parse(xhr.responseText)
        const slicedArr = parsed.slice(0, 20)
        slicedArr.map((el) => {
          const title = el['title']
          const imageLink = el['imageLink']
          const price = el['price']
          const id = el['id']
          this.state.categoryArray.push({
            itemName: title,
            price: price,
            imageUrl: imageLink,
            id: id
          })
        })
        this.setState(this.state)
      }
    }
    xhr.open('GET', 'http://localhost:4000/getItemsForCarousel')
    xhr.send()
  }

  render () {
    let settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      arrows: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    }
    let products = this.state.categoryArray.map((item) => {
      return (
        <div> <Item itemName={item.itemName} price={'£ ' + item.price} imageUrl={item.imageUrl}/></div>
      )
    })
    return (
        <Slick {...settings}>
          {products}
        </Slick>
    )
  }
}

export default Slider
