import React from 'react'
import Nav from './NavBar/index.jsx'
import SearchBar from './SearchBar/index.jsx'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'><h1>Amazon 2.0 Home Page</h1></Link>
        <header style={styles}>
          <SearchBar submitHandler={this.props.search} categorySelect={this.props.categorySelect} handleChange={this.props.handleChange} />
          <Nav home={'/home'} browse={'/search'} checkout={'/payment'} basket={'/basket'}/>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  search: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  categorySelect: React.PropTypes.func,
  list: React.PropTypes.array
}

const styles = {
  backgroundColor: '#222E3E',
  padding: '1em 0'
}

export default Header
