import React from 'react';
import ReactDom from 'react-dom';

class Amazon extends React.Component{
    render(){
        return(
            <p>Amazon sucks, fAC7 is better!!!</p>
        )
    }
}

ReactDom.render(
    <Amazon />,
    document.getElementById('amazon')
);
