import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './searchbar/searchbar.js';
import Nav from './navbar.js';


class Amazon extends React.Component{
  render(){

    return(
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <Amazon />,
  document.getElementById('amazon')
);
