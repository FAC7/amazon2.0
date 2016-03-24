import React from 'react'
import Item from './SearchItem.jsx'
require('./SearchResults.css')

class SearchResults extends React.Component {
  render () {
    const data = JSON.parse(this.props.state.searchResults) // eslint-disable-line
    return (
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
    )
  }
}

SearchResults.propTypes = {
  route: React.PropTypes.object
}

const listStyle = {
  padding: '0',
  margin: '0 auto',
  width: '60%'
}

export default SearchResults
