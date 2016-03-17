import React from 'react'
const Slider = require('react-slick')
import Item from './Item.jsx'

let options = [
  {
    imageUrl: 'https://www.fillmurray.com/500/300',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'https://girlwithadragonflytattoo.files.wordpress.com/2014/03/olivia-wilde-blonde.jpg',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  },
  {
    imageUrl: 'http://www.mycolombianrecipes.com/wp-content/uploads/2012/11/estrellitas.jpg',
    itemName: 'our amazing product',
    price: 300,
    description: 'Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition',
    buttonType: 'blach',
    buttonText: 'Buy Me!',
    link: 'https://www.victoriassecret.com/',
    quantity: 5
  }
]

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const productList = this.props.productList;
    console.log(productList);
    return (
      <div className='container'>
      	<Slider {...settings} {...options}>

        </Slider>
      </div>
    )
  }
})

class Category extends React.Component {
  render () {
    const products = []
      options.forEach(function (product) {
          products.push(<Item {...product}/>)
      })
    const categoryName = this.props.categoryName;

    return (
          <div className='category'>
              <h2>{categoryName}</h2>
              <SimpleSlider productList={products}/>
          </div>
    )
  }
}

export default Category
