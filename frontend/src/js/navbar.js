import React from 'react';

class Nav extends React.Component {

    render () {
        const ulInlineStyle = {
            backgroundColor: 'green',
            display: 'inline-flex',
            justifyContent: 'flex-end',
            position: 'fixed',
            height: '15vh',
            width: '100%',
            listStyleType: 'none',
            margin: 'auto',
            paddingTop: '10px'

        };

        const aInlineStyle = {
            padding: '10px',
            fontFamily: 'verdana'

        };

        const bodyStyle = {
            margin: '0'
        };

        return (
            <div style={bodyStyle}>
                <ul style={ulInlineStyle}>
                    <li>
                        <a style= {aInlineStyle} href={this.props.home}>Home</a>
                    </li>
                    <li>
                        <a style= {aInlineStyle} href={this.props.browse}>Browse</a>
                    </li>
                    <li>
                        <a style= {aInlineStyle} href={this.props.checkout}>Checkout</a>
                    </li>
                    <li>
                        <a style= {aInlineStyle} href={this.props.basket}>Basket</a>
                    </li>
                </ul>
                <div style={{
                    backgroundColor: 'blue',
                    height: '100em'
                }}>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    home: React.PropTypes.string,
    browse: React.PropTypes.string,
    checkout: React.PropTypes.string,
    basket: React.PropTypes.string
};

export default Nav;