import React from 'react'
import Nav from './NavBar/index.jsx'
import SearchBar from './SearchBar/index.jsx'

class Header extends React.Component {
  render () {
    return (
      <header style={styles}>
        <SearchBar />
        <Nav home={'/home'} browse={'/search'} checkout={'/payment'} basket={'/basket'}/>
      </header>
    )
  }
}

const styles = {
  backgroundColor: '#222E3E',
  padding: '1em 0'
}

export default Header
