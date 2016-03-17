import React from 'react'
import ReactDom from 'react-dom'
import SearchBar from './searchbar/searchbar.jsx'

class Amazon extends React.Component {
  render () {
    return (
    <SearchBar />
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
)
