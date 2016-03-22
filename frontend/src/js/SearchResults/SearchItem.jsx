import React from 'react'
import { Link } from 'react-router'
import modalItem from '../ProductPage/Button.jsx'
console.log(modalItem)

class Item extends React.Component {

  render () {
    imgStyles.backgroundImage = 'url(' + this.props.imgUrl + ')'
    return (
      <div>
        <table className='itemTable'>
          <tbody>
            <tr>
              <td>
                <Link to={this.props.itemUrl}>
                  <div className='itemImage' style={imgStyles}></div>
                </Link>
              </td>
              <td>
                <Link to={this.props.itemUrl}>
                  <h4 className='itemTitle'>{this.props.title}</h4>
                </Link>
              </td>
              <td>
                <p className='itemPrice'>{this.props.price}</p>
              </td>
              <td>
                <button className='btn buy-btn'>Add to Basket</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  imgUrl: React.PropTypes.string.isRequired,
  itemUrl: React.PropTypes.string
}

const imgStyles = {
  width: '50px',
  height: '50px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

export default Item
