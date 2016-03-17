import React from 'react'

const Price = (props) => <p>{props.itemPrice}</p>

Price.propTypes = {
    itemPrice: React.PropTypes.func.isRequired
}

export default Price
