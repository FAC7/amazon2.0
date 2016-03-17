import React from 'react';
import Button from './Button.jsx';

class Item extends React.Component {
    render () {
        const itemName  = this.props.itemName;
        const price     = this.props.price;
        const imageUrl  = this.props.imageUrl;
        const link      = this.props.link;
        return (
            <div className="item">
                <a href={link}>
                    <h3>{itemName}</h3>
                </a>
                    <span>{price}</span>
                <div className="img-box">
                    <a href={link}>
                        <img src={imageUrl}/>
                    </a>
                </div>
                <Button {...this.props}/>
            </div>
        );
    }
}

Item.PropTypes = {
    itemName : React.PropTypes.string.isRequired,
    price    : React.PropTypes.number.isRequired,
    imageUrl : React.PropTypes.string.isRequired,
    link     : React.PropTypes.string.isRequired
}

export default Item;
