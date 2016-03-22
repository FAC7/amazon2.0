import React from 'react'
import Item from './SearchItem.jsx'
import Header from '../Header/index.jsx'
require('./SearchResults.css')

class SearchResults extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <ul style={listStyle}>
          {data.map((item) => {
            return (
              <li key={item.id} className='itemLi'>
                <Item
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imageLink}
                  itemUrl={'/item/' + item.id} />
              </li>
             )
          })}
        </ul>
      </div>
    )
  }
}

const listStyle = {
  padding: '0',
  margin: '0 auto',
  width: '60%'
}

export default SearchResults

const data = [{ id: '383a13e3-ad02-e854-fbb0-858a628a3809',
  title: "Dare 2b Women's Psychedelic Bodywarmer",
  price: '49.99',
  imageLink: 'http://www.argos.co.uk/wcsstore/argos/images/568-8077949IEUC1038839T.jpg',
  rating: '4',
  reviews: '[{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.2,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.9,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer.  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":3.6,"date":1458316650693}]',
  description: "Perfect for individuals OR families, this product , a Dare 2b Women's Psychedelic Bodywarmer. , is an absolute bargain at £49.99. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.",
  stock: 4,
categories: '["clothing","women","global"]' }, { id: '383a13e3-ad02-e854-fbb0-858a628b3809',
  title: "Dare 2b Women's Psychedelic Bodywarmer",
  price: '49.99',
  imageLink: 'http://www.argos.co.uk/wcsstore/argos/images/568-8077949IEUC1038839T.jpg',
  rating: '4',
  reviews: '[{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.2,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.9,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer.  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":3.6,"date":1458316650693}]',
  description: "Perfect for individuals OR families, this product , a Dare 2b Women's Psychedelic Bodywarmer. , is an absolute bargain at £49.99. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.",
  stock: 4,
categories: '["clothing","women","global"]' }, { id: '383a13e3-ad02-e854-fbb0-858a628c3809',
  title: "Dare 2b Women's Psychedelic Bodywarmer",
  price: '49.99',
  imageLink: 'http://www.argos.co.uk/wcsstore/argos/images/568-8077949IEUC1038839T.jpg',
  rating: '4',
  reviews: '[{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.2,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":4.9,"date":1458316650693},{"author":"nickname","text":"This Dare 2b Women\'s Psychedelic Bodywarmer.  was fantastic. I have never been so happy with a product before in my life as I was with the Dare 2b Women\'s Psychedelic Bodywarmer. ","rating":3.6,"date":1458316650693}]',
  description: "Perfect for individuals OR families, this product , a Dare 2b Women's Psychedelic Bodywarmer. , is an absolute bargain at £49.99. It is extremely reliable, made with high quality materials, and comes with a 5-year quality guarantee.",
  stock: 4,
categories: '["clothing","women","global"]' }]
