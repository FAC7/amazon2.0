import React from 'react'
import Item from './Item.jsx'
import Slick from 'react-slick'

function mapDBtoState(slicedArr, stateArr) {
  slicedArr.map((el) => {
    const title = el['title']
    const imageLink = el['imageLink']
    const price = el['price']
    const id = el['id']
    stateArr.push({
      itemName: title,
      price: price,
      imageUrl: imageLink,
      id: id
    })
  })
}

function someOtherMapFunction (item) {
  return (
    <div> <Item itemName={item.itemName} price={'£ ' + item.price} imageUrl={item.imageUrl} itemID={item.id}/></div>
  )
}

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
        const slicedHairdryerArr = parsed[0].slice(0, 20)
        const slicedFootballArr = parsed[1].slice(0, 20)
        const slicedLaptopArr = parsed[2].slice(0, 20)
        mapDBtoState(slicedHairdryerArr, this.state.hairdryersArray)
        mapDBtoState(slicedFootballArr, this.state.footballsArray)
        mapDBtoState(slicedLaptopArr, this.state.laptopsArray)
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
    let hairdryersProducts = this.state.hairdryersArray.map(someOtherMapFunction)
    let footballsProducts = this.state.footballsArray.map(someOtherMapFunction)
    let laptopsProducts = this.state.laptopsArray.map(someOtherMapFunction)
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
