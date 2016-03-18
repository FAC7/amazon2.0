import React from 'react'
import Item from './Item.jsx'
import Slick from 'react-slick'

// Mock Database
let items = [
  {
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/98/9d/8e/989d8e48e1a3f1a91fa1381dd701d711.jpg',
    itemName: 'our amazing product',
    price: 1,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://static.rcgroups.net/forums/attachments/1/9/1/3/5/1/t3051304-101-thumb-cool%20rims.jpg?d=1265765518',
    itemName: 'our amazing product',
    price: 2,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://restaurant-hospitality.com/site-files/restaurant-hospitality.com/files/uploads/2009/04/cool-salads.jpg',
    itemName: 'our amazing product',
    price: 3,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://www.kahsoon.com/images1/Cool-Alarm-Clocks.gif',
    itemName: 'our amazing product',
    price: 4,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/45/40/fd/4540fd7ee6f50799d9af72bca54d367b.jpg',
    itemName: 'our amazing product',
    price: 5,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://hdfreewallpaper.net/wp-content/uploads/2015/04/Cool-iPhone-background6-200x150.jpg',
    itemName: 'our amazing product',
    price: 777776,
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
      centerMode: true,
      arrows: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }
    let products = items.map((item) => {
      return (
        <div> <Item itemName={item.itemName} price={'£ '+ item.price} imageUrl={item.imageUrl} link={item.link}/></div>
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
