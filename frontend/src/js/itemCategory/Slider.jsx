import React from 'react'
import Item from './Item.jsx'
import Slick from 'react-slick'

// Mock Database
let items = [
  {
    imageUrl: 'https://www.fillmurray.com/500/300',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://cdn.meme.am/instances/500x/28987066.jpg',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'https://www.fillmurray.com/500/300',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  }
]

class Slider extends React.Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    let products = items.map((item) => {
      return (
        <div> <Item itemName={item.itemName} price={item.price} imageUrl={item.imageUrl}/></div>
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
