import React from 'react'

class Price extends React.Component {
  render () {
    const style = {
      fontSize: '20px',
      verticalAlign: 'top',
      paddingTop: '0px',
      marginTop: '0px'
    }
    return <p style={style}>{this.props.currencySymbol}{this.props.price}</p>
  }
}

Price.propTypes = {
  price: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string.isRequired
}

export default Price
