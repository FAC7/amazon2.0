import React from 'react'
import Item from './SearchItem.jsx'
require('./SearchResults.css')

class SearchResults extends React.Component {

  sortBy (cb, e) {
    cb({sort: e.target.value})
  }

  render () {
    console.log(this.props)
    const data = JSON.parse(this.props.state.searchResults).sort((a, b) => {
      console.log('SORTING DATA')
      if (this.props.state.sort === 'price-desc') {
        return b.price - a.price
      } else if (this.props.state.sort === 'price-asc') {
        return a.price - b.price
      } else if (this.props.state.sort === 'rating') {
        return b.rating - a.rating
      }
    }) // eslint-disable-line
    if (data.length === 0) {
      return <h1>Sorry, your search has produced no results!</h1>
    } else {
      return (
        <div>
          <select id='sorting' onChange={this.sortBy.bind(null, this.props.changeState)} style={selectStyles}>
            <option value='price-desc'>Price: £££-->£</option>
            <option value='price-asc'>Price: £-->£££</option>
            <option value='rating'>Rating: high-low</option>
          </select>
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
}

SearchResults.propTypes = {
  route: React.PropTypes.object
}

const selectStyles = {
  margin: '0',
  padding: '5px 0',
  height: 'inherit',
  width: '10em',
  border: '5px solid',
  borderRadius: '5px 0px 0px 5px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexGrow: 1,
  listStyle: 'none'
}

const listStyle = {
  padding: '0',
  margin: '0 auto',
  width: '60%'
}

export default SearchResults
