import React from 'react'

const styleStock = {
  color: 'green',
  fontSize: '12px'
}

const styleOut = {
  color: 'red',
  fontSize: '12px'
}

class AdditionalInfo extends React.Component {
  render () {
    return (
      <div>
        {(this.props.stock > 0)
          ? <p style={styleStock}>{this.props.stock} in stock</p> : <p style={styleOut}> Out of stock </p>}
      </div>
    )
  }

}

AdditionalInfo.propTypes = {
  stock: React.PropTypes.number.isRequired
}

export default AdditionalInfo
