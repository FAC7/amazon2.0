import React from 'react'

const TotalPrice = (props) => <h4>{props.getPrice()}</h4>

TotalPrice.propsTypes = {
  getPrice: React.PropTypes.func
}

export default TotalPrice
