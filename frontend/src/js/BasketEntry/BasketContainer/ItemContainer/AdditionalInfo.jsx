import React from 'react'

class AdditionalInfo extends React.Component {
  render () {
    return (
    <div>
      {(this.props.stock > 0) ? <p>
                                   {this.props.stock} in stock
                                 </p> : <p>
                                          Out of stock
                                        </p>}
    </div>
    )
  }

}

AdditionalInfo.propTypes = {
  stock: React.PropTypes.number.isRequired
}

export default AdditionalInfo
