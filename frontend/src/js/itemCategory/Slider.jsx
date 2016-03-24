import React from 'react'
import Item from './Item.jsx'
import Slick from 'react-slick'

class Slider extends React.Component {

  constructor () {
    super()
    this.state = {hairdryersArray: [], footballsArray: [], laptopsArray: []}
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const parsed = JSON.parse(xhr.responseText)
        parsed.forEach((productsArr, i) => {
          // grabs hairdryersArray, footballsArray or laptopsArray depending on index
          const stateArr = this.state[Object.keys(this.state)[i]]
          // slices first 20 products and pushes product obj into appropriate state array
          productsArr.slice(0, 20).map((item) => {
            stateArr.push({
              itemName: item.title,
              price: item.price,
              imageUrl: item.imageLink,
              id: item.id
            })
          })
        })
        this.setState(this.state)
      }
    }
    xhr.open('GET', '/getItemsForCarousel')
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
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    }

    const returnItemJSX = (item) => {
      return (
        <div>
          <Item
            itemName={item.itemName}
            price={'£ ' + item.price}
            imageUrl={item.imageUrl}
            itemID={item.id} />
        </div>
      )
    }
    let hairdryersProducts = this.state.hairdryersArray.map(returnItemJSX)
    let footballsProducts = this.state.footballsArray.map(returnItemJSX)
    let laptopsProducts = this.state.laptopsArray.map(returnItemJSX)
    return (
      <div>
        <h2>Hairdryers</h2>
        <Slick {...settings}>
          {hairdryersProducts}
        </Slick>
        <h2>Footballs</h2>
        <Slick {...settings}>
          {footballsProducts}
        </Slick>
        <h2>Laptops</h2>
        <Slick {...settings}>
          {laptopsProducts}
        </Slick>
      </div>
    )
  }
}

export default Slider
