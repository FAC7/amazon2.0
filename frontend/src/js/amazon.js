import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './searchbar/searchbar.js'
import Footer from './footer/footer.js'

class Amazon extends React.Component{
    render(){
        return(
            <Footer />
        )
    }
}

ReactDom.render(
    <Amazon />,
    document.getElementById('amazon')
);
