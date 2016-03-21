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
        console.log('PARSED THAT BADBOY',parsed)
        const title = parsed['title']
        const imageLink = parsed['imageLink']
        const price = parsed['price']
        const id = parsed['id']
        this.state.categoryArray.push({
          itemName: title,
          price: price,
          imageUrl: imageLink,
          id: id
        })
        console.log("the first one", this.state)
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
      slidesToScroll: 1
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
