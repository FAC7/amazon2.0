import React from 'react'
import Nav from './NavBar/index.jsx'
import SearchBar from './SearchBar/index.jsx'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <div>
        <header className='container' style={styles}>
          <Link to='/'>
            <div className='logo-container'>
              <img src='/shamazon-logo.png'></img>
            </div>
          </Link>
          <SearchBar
            changeState={this.props.changeState} />
          <Nav home={'/home'} browse={'/search'} checkout={'/checkout'} basket={'/basket'}/>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  search: React.PropTypes.func,
  list: React.PropTypes.array,
  submitHandler: React.PropTypes.func,
  changeState: React.PropTypes.func
}

const styles = {
  backgroundColor: '#222E3E',
  padding: '1em 0'
}

export default Header
